import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { Link } from "react-router-dom";

interface BreadcrumbNavigationProps {
  className?: string;
}

const BreadcrumbNavigation = ({ className }: BreadcrumbNavigationProps) => {
  const breadcrumbs = useBreadcrumbs();
  
  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <div className={`container mx-auto px-6 py-4 ${className || ''}`}>
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem key={crumb.href}>
              {crumb.isCurrentPage ? (
                <BreadcrumbPage className="text-cyber-blue font-medium">
                  {crumb.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link 
                    to={crumb.href}
                    className="text-muted-foreground hover:text-cyber-blue transition-colors"
                  >
                    {crumb.label}
                  </Link>
                </BreadcrumbLink>
              )}
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNavigation;