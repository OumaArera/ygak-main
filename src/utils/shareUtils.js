export const shareProject = async (project) => {
  const projectUrl = `${window.location.origin}/projects/${project.id}`;
  const shareData = {
    title: project.title,
    text: project.description,
    url: projectUrl,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      console.log("Project shared successfully!");
    } else {
      await navigator.clipboard.writeText(projectUrl);
      alert("Share not supported on this browser. Link copied to clipboard!");
    }
  } catch (err) {
    console.error("Error sharing project:", err);
  }
};
