<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Guestbook</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    </head>
    <body class="container">
        <h1>Guestbook</h1>
        <div id="guestbook">
            <article v-for="message in messages">
                <h3>@{{ message.name }}</h3>
                <div class="body">
                    @{{ message.message }}
                </div>
            </article>

            <pre>
                    @{{ $data | json }}
            </pre>
        </div>


        <script src="/js/vendor.js"></script>
        <script src="/js/guestbook.js"></script>
    </body>
</html>
.
