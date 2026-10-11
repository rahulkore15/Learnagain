import { test, expect } from '@playwright/test';

test('GetAPI', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2');
  console.log(response.status());
 //console.log(await response.json());
 // await expect(response).toBeOK();
 
 const responseBody = await response.body();
 console.log(responseBody);
expect(responseBody).toBeTruthy();


 const responseheader = response.headers();
 //console.log(responseheader);


 const responsestatustext = response.statusText();
 console.log(responsestatustext);
expect(responsestatustext).toBe('OK');
expect(response.status()).toBe(200);
expect(response.ok()).toBe(true);

});