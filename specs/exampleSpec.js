export default function(spec) {
  spec.describe('Press the button', function() {
    spec.it('works', async function() {
      
      await spec.fillIn('Home.TextInput',"shubhanshu");
      await spec.pause(1000);
      await spec.pause(1000);
      
    });
  });
}
