export default (data) => {
  return {
    getMessages: (req, res) => {
      const room = req.params.id;

      data.getMessages(room)
        .then(messages => {
          res.send(messages);
        })
    }
  };
}