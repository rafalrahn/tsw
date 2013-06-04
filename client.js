(function() {
  if (window["WebSocket"]) {
    $(document).ready(function() {
      var animacja, canvas, polaczenie, context, id, sendDirection, server;
      server = null;
      canvas = $("#poziom");
      context = canvas.get(0).getContext("2d");    
      id = null;
      sendDirection = function(direction) {
        if (server) {
          return server.send(JSON.stringify({
            'direction': direction
          }));
        }
      };
