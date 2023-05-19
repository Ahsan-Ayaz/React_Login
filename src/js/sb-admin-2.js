import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const handleSidebarToggle = () => {
      document.body.classList.toggle('sidebar-toggled');
      document.querySelector('.sidebar').classList.toggle('toggled');
      if (document.querySelector('.sidebar').classList.contains('toggled')) {
        document.querySelectorAll('.sidebar .collapse').forEach((element) => {
          element.classList.remove('show');
        });
      }
    };

    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        document.querySelectorAll('.sidebar .collapse').forEach((element) => {
          element.classList.remove('show');
        });
      }
    };

    const handlePreventContentScroll = (e) => {
      if (window.innerWidth > 768) {
        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.sidebar').scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    };

    const handleScrollToTop = () => {
      const targetElement = document.querySelector('.scroll-to-top');
      const targetOffset = targetElement ? targetElement.offsetTop : 0;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    };

    window.addEventListener('resize', handleWindowResize);
    window.addEventListener('scroll', handleScrollToTop);
    document.getElementById('sidebarToggle').addEventListener('click', handleSidebarToggle);
    document.getElementById('sidebarToggleTop').addEventListener('click', handleSidebarToggle);
    document.querySelector('body.fixed-nav .sidebar').addEventListener('mousewheel', handlePreventContentScroll);
    document.querySelector('body.fixed-nav .sidebar').addEventListener('DOMMouseScroll', handlePreventContentScroll);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      window.removeEventListener('scroll', handleScrollToTop);
      document.getElementById('sidebarToggle').removeEventListener('click', handleSidebarToggle);
      document.getElementById('sidebarToggleTop').removeEventListener('click', handleSidebarToggle);
      document.querySelector('body.fixed-nav .sidebar').removeEventListener('mousewheel', handlePreventContentScroll);
      document.querySelector('body.fixed-nav .sidebar').removeEventListener('DOMMouseScroll', handlePreventContentScroll);
    };
  }, []);

  return (
    <div>
      {/* Render your components and JSX here */}
    </div>
  );
};

export default MyComponent;