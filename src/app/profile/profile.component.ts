import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false,
})
export class ProfileComponent implements OnInit {
  socialMediaList = [
    {
      name: 'github',
      icon: 'fab fa-github',
      class: 'github-icon',
      href: 'https://github.com/raji-16',
    },
    {
      name: 'linkedin',
      icon: 'fab fa-linkedin',
      class: 'linkedin-icon',
      href: 'https://www.linkedin.com/in/rajalakshmi-s-189860167/',
    },
    {
      name: 'codepen',
      icon: 'fab fa-codepen',
      class: 'codepen-icon',
      href: 'https://codepen.io/raji27',
    },
    {
      name: 'instagram',
      icon: 'fab fa-instagram',
      class: 'insta-icon',
      href: 'https://www.instagram.com/',
    },
  ];
  professionalSummary = [
    {
      year: '2021 - Present',
      role: 'Techincal Specialist',
      companyName: 'Accenture',
      summary: `I deepened my expertise in building modular, component-driven architectures using Angular. With its enhanced performance and scalability, I was able to take on more complex applications—leveraging tools like RxJS for reactive programming and Angular CLI to streamline development workflows and maintain consistency across projects.`,
      skill: [
        'Angular',
        'Javascript',
        'Typescript',
        'Java',
        'Node',
        'Devops',
        'React',
      ],
    },

    {
      year: '2018 - 2021',
      role: 'Technology Analyst',
      companyName: 'Infosys',
      summary: `I transitioned to Angular as it evolved and actively participated in analyzing and discussing project requirements, contributing to design recommendations and helping shape effective solutions. I also conducted research on new plugins and tools based on client needs, documenting key findings for future reference and team use. In addition, I'm familiar with deployment workflows, including pull request merging, ticket creation, and task assignment within the team, ensuring a smooth and collaborative development process.`,
      skill: ['Angular', 'Javascript', 'Typescript', 'Java', 'Node', 'Jira'],
    },

    {
      year: '2016 - 2018',
      role: 'Junior Associate',
      companyName: 'Vernalis',
      summary: `I received hands-on training in both AngularJS and Angular, building a strong foundation in frontend development. During this time, I contributed to developing new features and enhancing existing components, focusing on improving usability and performance. I placed a strong emphasis on writing clean, reusable code and collaborated closely with cross-functional teams to deliver high-quality, scalable user interfaces.`,
      skill: ['AngularJS', 'Javascript', 'JSP', 'Java', 'Bitbucket'],
    },
  ];
  skillList = [
    {
      icon: 'fa-brands fa-html5',
      desc: 'HTML',
    },
    {
      icon: 'fa-brands fa-css3-alt',
      desc: 'CSS3',
    },
    {
      icon: 'fa-brands fa-js',
      desc: 'JS',
    },
    {
      icon: 'fa-brands fa-react',
      desc: 'ReactJS',
    },
    {
      icon: 'fa-brands fa-angular',
      desc: 'Angular',
    },
    {
      icon: 'fa-brands fa-bootstrap',
      desc: 'Bootstrap',
    },
    {
      icon: 'fa-brands fa-sass',
      desc: 'SASS',
    },
    {
      icon: 'fa-brands fa-square-github',
      desc: 'GIT',
    },
    {
      icon: 'fa-brands fa-npm',
      desc: 'npm',
    },
  ];
  activeSection = 'about';
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit() {}
  @ViewChildren('sectionRef') sectionRefs!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
            this.cdr.detectChanges();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40% 0px',
      }
    );

    this.sectionRefs.forEach((section) =>
      this.observer.observe(section.nativeElement)
    );
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
