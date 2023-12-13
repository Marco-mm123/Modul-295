async function simuliereVerzoegerung(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
async function addierenNachVerzoegerung(a, b, ms){
    await simuliereVerzoegerung(ms);
    return a + b;
}