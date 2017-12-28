<?php
/**
 * 二维数组排序
 * @param $array
 * @param $type
 * @param string $order
 * @return array
 */
function array_sort($array, $type, $order='asc' ){
    // 1. 组装为一维数组
    $temp_array = array();
    foreach($array as $key=>$value){
        $temp_array[$key] = $value[$type];
    }
    // 2. 判断排序
    if($order=='asc'){
        asort($temp_array);
    }else{
        arsort($temp_array);
    }
    // 3. 重新组装排序后的二维数组
    $new_array = array();
    foreach($temp_array as $key=>$value){
        $new_array[$key] = $array[$key];
    }
    return $new_array;
}