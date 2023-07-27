import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SafePipe } from 'src/app/@pipe/safe.pipe';
import { By } from '@angular/platform-browser';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent, SafePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all the links provided', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    expect(links.length).toBe(4);
  });

  it('should call `setTitle` method when any link is clicked', () => {
    const link = fixture.debugElement.queryAll(By.css('a'))[0];
    spyOn(component, 'setTitle');

    link.nativeElement.click();

    expect(component.setTitle).toHaveBeenCalled();

    // expect(links.length).toBe(4);
  });
});
