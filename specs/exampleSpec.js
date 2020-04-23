export default function(spec) {
  spec.describe('Press the button', function() {
    spec.it('works', async function() {
      for(i=0;i<10; i++) {
        await spec.fillIn('Home.TextInput',"shubhanshu"+i);
        await spec.pause(1000);
      }
    });
  });
}
