import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseComponent } from './base.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [BaseComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Pokémon'`, () => {
    const fixture = TestBed.createComponent(BaseComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular Pokémon');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BaseComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Angular Pokémon is running!');
  });
});
