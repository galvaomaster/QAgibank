// search.page.js
import { expect } from '@playwright/test';
import { timeout } from '../playwright.config';

export class SearchPage {
  constructor(page) {
    this.page = page;

    //this.searchBoxInput = page.locator('form.search-form input#search-field');
    this.searchButton = page.getByRole('button', { name: 'Search button' });
    this.searchBoxInput = page.getByRole('searchbox', { name: 'Pesquisar por:' });

    this.resultsTitle = page.getByRole('heading', { name: /resultados encontrados para:/i });
    this.searchResult = page.getByRole('link', {
      name: 'Como evitar golpe do empréstimo consignado?',
      exact: true
    });
    this.noResultsMessage = page.getByText(/lamentamos, mas nada foi encontrado/i);
  }

  async searchFor(term ) {
    
    await this.page.waitForLoadState('domcontentloaded');

    await expect(this.searchButton).toBeVisible({ timeout: 30_000 });
    await this.searchButton.click({ force: true });

    await this.searchBoxInput.type(term, { delay: 50 });

    await this.searchButton.click({ force: true });
  
    
  }



  async validateExpectedResult() {   
    await expect(this.resultsTitle).toBeVisible({ timeout: 30_000 });
    await expect(this.searchResult).toBeVisible({ timeout: 30_000 });
    await expect(this.searchResult).toHaveText(/golpe do empréstimo consignado/i);
    await expect(this.searchResult).toHaveAttribute(
      'href',
      /golpe-do-emprestimo-consignado/
    );
  }

  async validateNoResult() {
    await expect(this.noResultsMessage).toBeVisible({ timeout: 15_000 });
  }
}
