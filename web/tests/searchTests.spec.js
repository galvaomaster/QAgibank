import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import { searchData } from '../test-data/search.data';

test.beforeEach(async ({ page }) => {
  await page.goto('https://blog.agibank.com.br/', { waitUntil: 'domcontentloaded' });
});

test('Realizar pesquisa com sucesso', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.searchFor(searchData.validSearch);
  await searchPage.validateExpectedResult();
});

test('Realizar pesquisa sem resultado',{tag: '@noresults'} , async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.searchFor(searchData.invalidSearch);
  await searchPage.validateNoResult();
});
