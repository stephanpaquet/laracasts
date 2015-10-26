<?php
get('guestbook', function () {
    return view('guestbook');
});


// get all messages
get('api/messages', function () {
    return App\Message::all(); // retourne la query en Json
});

// Creation d'un Message
post('api/messages', function () {
    return App\Message::Create(Request::all());
});
