import type { Education } from '@/types';

export const education: Education[] = [
  {
    degree: 'Dual Degree — B.Tech (Civil) & MS (Building Science)',
    institution: 'IIIT Hyderabad',
    period: '2016 — 2021',
    location: 'Hyderabad, India',
    score: 'CGPA 7.3 / 10',
    highlights: [
      'Completed the full CS curriculum: DSA, OS, OOP, DBMS, Computer Networks, ML, AI and Software Engineering.',
      'MS by Research in Building Science at the Lab for Spatial Informatics.',
      'Built ML models for environmental monitoring and water-quality analysis.',
    ],
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Sri Gayatri Jr. College',
    period: '2014 — 2016',
    location: 'Hyderabad, India',
    score: '98.1%',
    highlights: [
      'Telangana State Board.',
      'Ranked among top performers in mathematics.',
      'Merit-scholarship recipient.',
    ],
  },
  {
    degree: 'Secondary School Education',
    institution: 'Chaitanya High School',
    period: '2014',
    location: 'Hyderabad, India',
    score: 'GPA 9.3 / 10',
    highlights: ['APSSC board.', 'School topper in mathematics.', 'Science-club coordinator.'],
  },
];
