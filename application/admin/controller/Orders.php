<?php
/**
 * Created by PhpStorm.
 * User: code
 * Date: 2019/4/22
 * Time: 17:49
 */

namespace app\admin\controller;

use app\admin\model\Order;
use app\admin\model\Orderitem;
use app\admin\model\Category;
use think\Request;

class Orders extends BaseMould
{
    //模型名字
    public $mouldname = 'order';
    //自身模型实例
    public $m;
    //添加数据


    public function _initialize()
    {
        //调用父类的构造函数
        parent::_initialize();
        $this->m = new Order;
    }



    public function edit($id)
    {
        foreach ($this->field as $k=>$val) {
            if($val['fieldname'] == 'mid' || $val['fieldname'] == 'pid' || $val['fieldname'] == 'unit' || $val['fieldname'] == 'specs')
            {
                $this->field[$k]['read'] = '1';
            }
        }
        return parent::edit($id); // TODO: Change the autogenerated stub
    }

    //添加订单
    public function order($id=0)
    {
        $m = $this->m->where('id', $id)->find();


        if (Request::instance()->isPost())
        {
            $or = new Order;
            $or->ordernum = Request::instance()->post('ordernum');
            $or->mid = $m['mid'];
            $or->update = time();
            $or->save();

            $pids =  Request::instance()->post('pid/a');
            $specss =  Request::instance()->post('specs/a');
            $units =  Request::instance()->post('unit/a');
            $nums =  Request::instance()->post('num/a');


            foreach ($pids as $k=>$v)
            {
                $oitem = new Orderitem;
                $oitem->oid = $or->id;
                $oitem->pid = $pids[$k];
                $oitem->specs = $specss[$k];
                $oitem->unit = $units[$k];
                $oitem->num = $nums[$k];
                $oitem->update = time();
                $oitem->save();
            }
            $this->success('添加成功！','/admin/members/index');
        }

        //初始化订单
        $temp['id'] = $m['id'];
        $temp['ordernum'] = $m['ordernum'];
        $temp['mid'] = $m['mid'];
        $this->assign('temp',$temp);
        $this->assign('mid',$m->getData('mid'));

        $orderitem = Orderitem::all(['oid'=>$m['id']]);
        $this->assign('orderitem',$orderitem);


        //准备产品分类
        $catearr = array();
        $cate = new Category;
        $cate->getProTree(0, $catearr);
        $catearr = $cate->getSelectArray($catearr);
        $this->assign('catearr',$catearr);


        $this->assign('title','添加订单-'.$this->title);
        return view('');
    }

    public function additem()
    {
        if (Request::instance()->isPost())
        {
            $pid =  Request::instance()->post('pid');
            $specs =  Request::instance()->post('specs');
            $unit =  Request::instance()->post('unit');
            $num =  Request::instance()->post('num');
            $oid =  Request::instance()->post('oid');

            $oitem = new Orderitem;
            $oitem->oid = $oid;
            $oitem->pid = $pid;
            $oitem->specs = $specs;
            $oitem->unit = $unit;
            $oitem->num = $num;
            $oitem->update = time();
            $oitem->save();

            return json_encode(array('id'=>$oitem['id'], 'pid'=>$oitem->pid, 'title'=>$oitem->pid, 'specs'=> $oitem->specs, 'unit'=>$oitem->unit, 'num'=>$oitem->num, 'oid'=>$oitem->oid));

        }
    }

    public function delitem($id)
    {
        $oitem = Orderitem::get($id);
        $oitem ->delete();
        $re = array(
            'status'=>1,
        );
        return json_encode($re);
    }
}