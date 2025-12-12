let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}
fill.style.width = `${Math.m
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}
// Animate skill bars when skills section is visible
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  const skills = Array.from(document.querySelectorAll(".skill"));

  const fillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;

        skills.forEach((s) => {
          const level = Number(s.dataset.level || 0);
          const fill = s.querySelector(".skill__fill");
          if (fill) {
            fill.style.width = `${Math.max(0, Math.min(level, 100))}%`;
          }
        });

        fillObserver.disconnect();
      });
    },
    { threshold: 0.35 }
  );

  fillObserver.observe(skillsSection);
}