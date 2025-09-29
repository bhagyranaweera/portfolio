document.addEventListener("DOMContentLoaded", function () {
  // Soft skills animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar');
        bars.forEach(bar => {
          const fill = bar.querySelector('.skill-bar-fill');
          const percent = bar.getAttribute('data-percent');
          fill.style.width = percent + '%';
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const softSkillsList = document.querySelector('.soft-skills-list');
  if (softSkillsList) {
    observer.observe(softSkillsList);
  }

  // Progress circles animation
  const progressCircles = document.querySelectorAll(".progress-circle");

  progressCircles.forEach((circle) => {
    const percent = circle.getAttribute("data-percent");
    circle.style.setProperty("--percent", 0);
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      circle.style.setProperty("--percent", current);
      if (current >= percent) clearInterval(interval);
    }, 20);
  });

  // Typing animation
  const texts = ["Cybersecurity Undergraduate", "Web Developer", "UI/UX Designer", "Video Editor"];
  let textIndex = 0;
  let index = 0;
  const typingText = document.getElementById("typing-text");
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    if (!isDeleting) {
      typingText.innerHTML += currentText.charAt(index);
      index++;
      if (index === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause before deleting
        return;
      }
      setTimeout(type, 100);
    } else {
      typingText.innerHTML = currentText.substring(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // Pause before typing next
        return;
      }
      setTimeout(type, 50);
    }
  }

  type();
});
