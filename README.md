# Snow JS

A JS lib (2kb) to make snow ❄️

## How to use or make it snow then?

All you need to do is put the script in your page (that one from dist folder) and call the fall method:

```
<html>
	<body>
	.
	.
	.
	<script src="snow.js"></script>
	<script>
		new Snow().fall();
	</script>
	</body>
</html>
```

## Customisations ⛄️

The Snow class accepts a json object as a param so you can set your options. Here are the default values:

```
this.default = {
	quantity: 5,     // Quantity of snowflake to be dropped every cycle
	minSize: 2,      // Minimum size of the snowflake (px)
	maxSize: 4,      // Maximum size of the snowflake (px)
	color: 'white',  // Snowflake color
	speed: '4s',     // Transition time for the snowflake fall
};
```

## Examples

Default
```
new Snow().fall();
```

Canada
```
new Snow({
	quantity: 15,
	speed: '2s',
}).fall();
```

Antarctica
```
new Snow({
	quantity: 30,
	speed: '1s',
	color: 'lightgrey',
	minSize: 1,
	maxSize: 5,
}).fall();
```

Fukushima
```
new Snow({
	quantity: 20,
	speed: '2s',
	color: 'yellow',
	minSize: 5,
	maxSize: 10,
}).fall();
```

## License

This project is licensed under the MIT License️
