const prod = {
   url: {
   API_URL: 'https://mariansada.github.io/coffee_shop/',
   }
 };
 const dev = {
   url: {
   API_URL: '/coffee_shop'
  }
 };
 export const config = process.env.NODE_ENV === 'development' ? dev : prod;