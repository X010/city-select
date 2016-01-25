# city-select

china province city county street

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jeffrey/city-select/master/dist/citry-select.min.js
[max]: https://raw.github.com/jeffrey/city-select/master/dist/citry-select.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/citry-select.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Documentation

```html
$('#custom_data').cxSelect({ 
  selects: ['first', 'second', 'third', 'fourth', 'fifth'], 
  jsonName: 'name', 
  jsonValue: 'value', 
  jsonSub: 'sub', 
  url: [ 
    {name:'A', value: '1', sub: [ 
      {name: 'A-1', value: '2', sub: [ 
        {name: 'A-1-1', value: '11'} 
        // more.. 
      ]} 
      {name: 'A-2', value: '3', sub: [ 
        {name: 'A-2-1', value: '34'} 
      ]} 
      // more.. 
    ]}, 
    {name:'B', value: '5', sub: [ 
      {name: 'B-1', value: '8', sub: [ 
        {name: 'B-1-1', value: '16'} 
      ]} 
    ]} 
    // more.. 
  ] 
});
```

## Examples
```html
<div id="region3">
    <span class="item-inline"><select class="form-control province" id="province" data-first-title="全部省份"></select></span>
    <span class="item-inline"><select class="form-control city" id="city" data-first-title="全部城市"></select></span>
    <span class="item-inline"><select class="form-control area" id="area" data-first-title="全部区县"></select></span>
    <span class="item-inline"><select class="form-control street" id="street" data-first-title="全部区县"></select></span>
</div>

<script language="JavaScript">
    //新增地址选择地区
    $('#region3').cxSelect({
        url: 'city.json',  // 提示：如果服务器不支持 .json 类型文件，请将文件改为 .js 文件
        selects: ['province', 'city', 'area','street'],  // selects 为数组形式，请注意顺序
    });

</script>
```

## Release History
_(Nothing yet)_
# city-select
