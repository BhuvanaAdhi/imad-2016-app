var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article_one:{
    title: "Web Development",
    heading: "Web Development",
    paratitle: "Basics of Web Development - Sep 28,2016",
    content: `
     <p>
                Web development is a broad term for the work involved in developing a web site for the Internet (World Wide Web) or intranet (a private network). Web development can range from developing the simplest static single page of plain text to the most complex web-based internet applications, electronic businesses, and social network services. A more comprehensive list of tasks to which web development commonly refers, may include web engineering, web design, web content development, client liaison, client-side/server-side scripting, web server and network security configuration, and e-commerce development. Among web professionals, "web development" usually refers to the main non-design aspects of building web sites: writing markup and coding. Most recently Web development has come to mean the creation of content management systems or CMS. These CMS can be made from scratch, proprietary or open source. In broad terms the CMS acts as middleware between the database and the user through the browser. A principle benefit of a CMS is that it allows non-technical people to make changes to their web site without having technical knowledge.
            </p>
            
    `
        
    },
    article_two:{
         title: "Web Development",
        heading: "Web Development Industry",
        paratitle: "Web Development as a Industry - Sep 28,2016",
        content: `<p>Since the commercialization of the web, web development has been a growing industry. The growth of this industry is being driven by businesses wishing to use their website to sell products and services to customers.[2]

There is open source software for web development like BerkeleyDB, GlassFish, LAMP (Linux, Apache, MySQL, PHP) stack and Perl/Plack. This has kept the cost of learning web development to a minimum. Another contributing factor to the growth of the industry has been the rise of easy-to-use WYSIWYG web-development software, such as Adobe Dreamweaver, BlueGriffon and Microsoft Visual Studio. Knowledge of HyperText Markup Language (HTML) or of programming languages is still required to use such software, but the basics can be learned and implemented quickly with the help of help files, technical books, internet tutorials, or face-to-face training.

An ever growing set of tools and technologies have helped developers build more dynamic and interactive websites. Further, web developers now help to deliver applications as web services which were traditionally only available as applications on a desk-based computer. This has allowed for many opportunities to decentralize information and media distribution. Examples can be seen with the rise of cloud services such as Adobe Creative Cloud, Dropbox and Google Docs. These web services allow users to interact with applications from many locations, instead of being tied to a specific workstation for their application environment.

Examples of dramatic transformation in communication and commerce led by web development include e-commerce. Online auction-sites such as eBay have changed the way consumers find and purchase goods and services. Online retailers such as Amazon.com and Buy.com (among many others) have transformed the shopping and bargain-hunting experience for many consumers. Another good example of transformative communication led by web development is the blog. Web applications such as WordPress and Movable Type have created easily implemented blog-environments for individual web sites. The popularity of open-source content management systems such as Joomla!, Drupal, XOOPS, and TYPO3 and enterprise content management systems such as Alfresco and eXo Platform have extended web development's impact at online interaction and communication.

Web development has also impacted personal networking and marketing. Websites are no longer simply tools for work or for commerce, but serve more broadly for communication and social networking. Websites such as Facebook and Twitter provide users with a platform to communicate and organizations with a more personal and interactive way to engage the public.
        </p>
        `
    },
    article_three:{
         title: "Web Development",
        heading: "Security Feature",
        paratitle: "Security Considerations - Sep 28,2016",
        content: `<p>
            Web development takes into account many security considerations, such as data entry error checking through forms, filtering output, and encryption. Malicious practices such as SQL injection can be executed by users with ill intent yet with only primitive knowledge of web development as a whole. Scripts can be used to exploit websites by granting unauthorized access to malicious users that try to collect information such as email addresses, passwords and protected content like credit card numbers.

Some of this is dependent on the server environment on which the scripting language, such as ASP, JSP, Perl, PHP, Python or Ruby is running, and therefore is not necessarily down to the web developer themselves to maintain. However, stringent testing of web applications before public release is encouraged to prevent such exploits from occurring. If some contact form is provided in a website it should include a captcha field in it which prevents computer programs from automatically filling forms and also mail spamming.

Keeping a web server safe from intrusion is often called Server Port Hardening. Many technologies come into play to keep information on the internet safe when it is transmitted from one location to another. For instance TLS certificates (or "SSL certificates") are issued by certificate authorities to help prevent internet fraud. Many developers often employ different forms of encryption when transmitting and storing sensitive information. A basic understanding of information technology security concerns is often part of a web developer's knowledge.

Because new security holes are found in web applications even after testing and launch, security patch updates are frequent for widely used applications. It is often the job of web developers to keep applications up to date as security patches are released and new security concerns are discovered.
            </p>`}
    
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

app.get('/:articleName', function (req, res) {
    var articleName = req.param.articleName;
    res.send(createTemplate(articles[articleName]));
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
