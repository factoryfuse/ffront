let socket: WebSocket = new WebSocket('ws://localhost:1243');
let isSocketOn_val = false;

const isSocketOn = () => {
    return isSocketOn_val;
};

socket.addEventListener('open', (e) => {
    console.log("Connection established with WebSocket");
    isSocketOn_val = true;
});

socket.addEventListener('close', (e) => {
    console.log("Connection destablished.")
    isSocketOn_val = false;
});

const ReestablishSocket = () => {
    const new_socket = new WebSocket('ws://localhost:1243');
    socket = new_socket
    return socket
}

export default socket;
export { isSocketOn, ReestablishSocket };