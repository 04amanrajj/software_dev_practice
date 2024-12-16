function enqueue(data){
    if (count == size){
        console.log("QUEUE IS FULL, CAN'T YOU SEE!");
        return;
    }
    arr[front] = data;
    front = ( front + 1 ) % size;
    count++;
}

function dequeue(){
    if (count === 0){
        console.log("QUEUE IS EMPTY, CANT'T YOU SEE!");
        return;
    }
    console.log(arr[rear]);
    rear = ( rear + 1 ) % size;
    count--;
}