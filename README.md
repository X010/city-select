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
_(Coming soon)_

## Release History
_(Nothing yet)_
# city-select
