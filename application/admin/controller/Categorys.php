<?php
/**
 * Created by PhpStorm.
 * User: code
 * Date: 2019/4/12
 * Time: 10:40
 */

namespace app\admin\controller;

use app\admin\model\Category;

class Categorys extends BaseMould
{
    public $mouldname = 'category';
    public $m;
    public function _initialize()
    {
        //调用父类的构造函数
        parent::_initialize();
        $this->m= new Category;
    }

    public function add()
    {
        return parent::add(); // TODO: Change the autogenerated stub
    }
}