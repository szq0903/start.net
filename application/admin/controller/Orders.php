<?php
/**
 * Created by PhpStorm.
 * User: code
 * Date: 2019/4/22
 * Time: 17:49
 */

namespace app\admin\controller;

use app\admin\model\Cart;

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
        $this->m = new Cart;
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

}