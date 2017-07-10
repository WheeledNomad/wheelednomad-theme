hexo.extend.tag.register("ext", function(args, content)
{
	var link = args[0];
	return "<sup>[<a href='" + link + "'>Ext</a>]</sup>";

})
