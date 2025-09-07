import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

const routeConfig: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/services/security-assessments-consulting': 'Security Assessments & Consulting',
  '/services/penetration-testing': 'Penetration Testing',
  '/services/CISO': 'Virtual CISO',
  '/services/IR': 'Incident Response',
  '/services/insiderthreat': 'Insider Threat',
  '/services/tabletop_exercises': 'Tabletop Exercises',
  '/services/solution-engineering': 'Solution Engineering',
  '/contact': 'Contact Us',
  '/media': 'Media & Content',
  '/podcast': 'Cybersecurity America Podcast',
  '/request-quote': 'Request Quote',
};

export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // Always start with Home
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];
  
  // Handle root path
  if (pathname === '/') {
    breadcrumbs[0].isCurrentPage = true;
    return breadcrumbs;
  }
  
  // Split path into segments
  const segments = pathname.split('/').filter(Boolean);
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    
    // Get the label from route config
    const label = routeConfig[currentPath];
    
    if (label) {
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: isLast
      });
    } else {
      // Fallback for dynamic or unknown routes
      const fallbackLabel = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label: fallbackLabel,
        href: currentPath,
        isCurrentPage: isLast
      });
    }
  });
  
  return breadcrumbs;
};