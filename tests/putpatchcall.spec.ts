import{test,expect} from '@playwright/test'

test('putcall',async function ({request})
{

const authdata = {
  "username": 'admin',
  "password": 'password123'
};

  const response= await request.post("https://restful-booker.herokuapp.com/auth",{headers: { 'Content-Type': 'application/json' }, data: authdata })

  const jsonresponse= await response.json();
  console.log(jsonresponse);
  const token=jsonresponse.token;
  console.log(token);
})