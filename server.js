var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article_one={
    title: "Web Development",
    heading: "Web Development",
    paratitle: "Basics of Web Development - Sep 28,2016",
    content: `
     <p>
                Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or intranet (a private network). Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications, electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals, "web development" usually refers to the main non-design aspects of building web sites: writing markup and coding. Most recently Web development has come to mean the creation of content management systems or CMS. These CMS can be made from scratch, proprietary or open source. In broad terms the CMS acts as middleware between the database and the user through the browser. A principle benefit of a CMS is that it allows non-technical people to make changes to their web site without having technical knowledge.
            </p>
    `
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var paratitle = data.paratitle;
    var content = data.content;
    var htmltemplate=`
                        <html>
                           <head>
                               <title>$(title)</title>
                               <meta name="viewport" content="width-device-width, initial-scale=1"/>
                               <link href="ui/style.css" rel="stylesheet"/>
                           </head> 
                            <body>
                                <div class="container">
                                <div>
                                    <a href="/">Home</a>
                                </div>
                                <hr/>
                                <h1>$(heading)</h1>
                                <div>
                                   $(paratitle)
                                </div>
                                <div>
                                    $(content)
                                </div>
                                </div>
                            </body>
                        </html>
                        `;
    return htmltemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(article_one));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
