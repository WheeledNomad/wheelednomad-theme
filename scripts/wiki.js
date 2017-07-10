hexo.extend.tag.register("wiki", function(args, content)
{
	var link = args[0];
	return "<sup>[<a href='https://en.wikipedia.org/wiki/" + link + "'>Wiki</a>]</sup>";

}
)