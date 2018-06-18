export default (data) => {
  return {
    getMessages: (req, res) => {
      const room = req.params.id;

      data.getMessages(room)
        .then(messages => {
          res.send(messages);
        })
    },
    deleteMessage: (req, res) => {
      const id = req.params.messageId;

      data
        .deleteMessage(id)
        .then(() => {
          res.sendStatus(204);
        })
    }
  };
}