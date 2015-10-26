<!DOCTYPE html>
<html>
    <head>
        <meta name="token" id="token" value=" {{ csrf_token() }}">
        <meta charset="utf-8">
        <title>Guestbook</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
        <style media="screen">
            body {
                    margin: 2em 0;
            }

            .error {
                font-weight: bold;
                color: red;
            }
        </style>
    </head>
    <body class="container">
        <h1>Guestbook</h1>
        <div id="guestbook">
            <form method="post" v-on="submit: onSubmitForm">
                <div class="form-group">
                    <label for="name">
                        Name:
                        <span class="error" v-if="! newMessage.name">*</span>
                    </label>
                    <input type="text" name="name" id="name" class="form-control" v-model="newMessage.name"/>
                </div>

                <div class="form-group">
                    <label for="message">
                        Message:
                        <span class="error" v-show="! newMessage.message">*</span>
                    </label>
                    <textarea type="textarea" id="message" name="message" class="form-control" v-model="newMessage.message">
                    </textarea>
                </div>

                <div class="form-group" v-show="! submitted">
                    <button type="submit" class="btn btn-default" v-attr="disabled: errors">Sign Guestbook</button>
                </div>

                <div class="alert alert-success" role="alert" v-show="submitted">
                    Thanks !
                </div>

            </form>
            <hr>

            <article v-repeat="messages">
                <h3>@{{ name }}</h3>
                <div class="body">@{{ message }}</div>
            </article>
            <hr>

            <pre>
                    @{{ $data | json }}
            </pre>
        </div>

        <script src="/js/vendor.js"></script>
        <script src="/js/guestbook.js"></script>
    </body>
</html>
