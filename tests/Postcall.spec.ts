import { test, expect } from '@playwright/test';

test('GetAPI', async ({ request }) => {

  const authdata = {
    name: 'morpheus',
    job: 'leader',
  };

const response = await request.post('https://reqres.in/api/users',{headers: { 'Content-Type': 'application/json' }, data: authdata});
console.log(response.status());
console.log(await response.json());

});