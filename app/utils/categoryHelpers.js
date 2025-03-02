export const getUniqueCategories = (projects) => {
  const uniqueCategories = new Set();
  
  projects.forEach(project => {
    if (project.category) uniqueCategories.add(project.category);
    if (project.categoryAr) uniqueCategories.add(project.categoryAr);
  });

  return Array.from(uniqueCategories);
}; 