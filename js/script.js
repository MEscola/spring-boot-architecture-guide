// Dark / Light Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});

// Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Flux Explanation Interaction
const flowBoxes = document.querySelectorAll(".flow-box");
const title = document.getElementById("flow-title");
const description = document.getElementById("flow-description");
const details = document.getElementById("flow-details");

flowBoxes.forEach(box => {
  box.addEventListener("click", () => {

    flowBoxes.forEach(b => b.classList.remove("active-flow"));
    box.classList.add("active-flow");

    const newTitle = box.getAttribute("data-title");
    const newDesc = box.getAttribute("data-description");
    const newDetails = box.getAttribute("data-details");

    title.textContent = newTitle;
    description.textContent = newDesc;
    details.textContent = newDetails;
  });
});

const codeExample = document.getElementById("code-example");

const codeSamples = {
  Controller: `@RestController
@RequestMapping("/users")
public class UserController {

  @PostMapping
  public ResponseEntity<UserDTO> create(@RequestBody UserDTO dto) {
      return ResponseEntity.ok(service.create(dto));
  }
}`,

  Service: `@Service
public class UserService {

  public UserDTO create(UserDTO dto) {
      User user = new User(dto.getName());
      repository.save(user);
      return new UserDTO(user.getId(), user.getName());
  }
}`,

  Repository: `@Repository
public interface UserRepository 
      extends JpaRepository<User, Long> {
}`,

  Database: `Tabela users
-------------------------
id   | bigint
name | varchar`
};

flowBoxes.forEach(box => {
  box.addEventListener("click", () => {

    flowBoxes.forEach(b => b.classList.remove("active-flow"));
    box.classList.add("active-flow");

    const newTitle = box.getAttribute("data-title");
    const newDesc = box.getAttribute("data-description");
    const newDetails = box.getAttribute("data-details");

    title.textContent = newTitle;
    description.textContent = newDesc;
    details.textContent = newDetails;

    codeExample.textContent = codeSamples[newTitle] || "Código não disponível.";
  });
});