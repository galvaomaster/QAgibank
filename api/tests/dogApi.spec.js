const { test, expect } = require('@playwright/test');

test.describe('Dog API', () => {
  test('GET /breeds/list/all deve retornar a lista completa de racas', async ({ request }) => {
    const response = await request.get('breeds/list/all');
    const body = await response.json();
    const breeds = Object.keys(body.message);
    expect(response.status()).toBe(200);
    expect(body.status).toBe('success');
    expect(typeof body.message).toBe('object');
    expect(breeds.length).toBeGreaterThan(0);
    console.log('Listagem de todas as racas:', body.message);
    expect(breeds).toContain('chow');
  });

    test('GET /breeds/image/random deve retornar uma imagem valida de um pastor australiano', async ({ request }) => {
    const breed = 'australian/shepherd';
    const response = await request.get(`breed/${breed}/images/random`);
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body.status).toBe('success');
    expect(typeof body.message).toBe('string');
    expect(body.message).toContain('australian');
    console.log('Imagem de um Pastor Australiano:', body.message);

  });

  test('GET /breeds/image/random deve retornar imagem aleatoria de uma raca', async ({ request }) => {
    const response = await request.get('breeds/image/random');
    const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body.status).toBe('success');
    expect(typeof body.message).toBe('string');
    expect(body.message).toContain('https://images.dog.ceo');
    console.log('Imagem de uma Raca aleatoria:', body.message);

  });

  test('GET /breeds/image/random deve retornar erro ao tentar obter imagem de uma raca inexistente', async ({ request }) => {
    const breed = 'caramelo-brasileiro';
    const response = await request.get(`breed/${breed}/images/random`);
    const body = await response.json();
    expect(response.status()).toBe(404);
    expect(body.status).toBe('error');
    expect(typeof body.message).toBe('string');
    expect(body.message).toContain('Breed not found (main breed does not exist)');
    console.log('Imagem de uma Raça inexistente:', body.message);

  });

  test('GET em uma url invalida', async ({ request }) => {
    const response = await request.get('caramelo-brasileiro');
    const body = await response.json();

    expect(response.status()).toBe(404);
    expect(body.status).toBe('error');
    expect(typeof body.message).toBe('string');
    expect(body.message.toLowerCase()).toContain('no route found');
    console.log('Retorno da URL invalida:', body.message);
  });



});
