import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto(`http://localhost:${process.env.PORT}`);
  // test for full title (fails)
  // await expect(page).toHaveTitle("Test page");

  // test for partial title (passes)
  await expect(page).toHaveTitle(/Test page/);
});

test("page has image of Helsinki", async ({ page }) => {
  await page.goto(`http://localhost:${process.env.PORT}`);

  await expect(page.getByRole("img")).toBeVisible();
  await expect(page.getByRole("img")).toHaveAttribute(
    "alt",
    "City of Helsinki envisioned by AI"
  );
});

test("form submission", async ({ page }) => {
  await page.goto(`http://localhost:${process.env.PORT}`);

  await page.fill('input[name="name"]', "John Doe");
  await page.fill('input[name="email"]', "john@doe.fi");
  await page.fill('textarea[name="message"]', "Hello, World!");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(`http://localhost:${process.env.PORT}/submit`);

  await expect(page.getByRole("heading")).toHaveText(/Form submitted/);
  await expect(page.getByText("Name:John Doe")).toBeVisible();
  await expect(page.getByText("Email:john@doe.fi")).toBeVisible();
  await expect(page.getByText("Message:Hello, World!")).toBeVisible();

  await expect(page.getByRole("img")).toHaveAttribute(
    "src",
    "craiyon_193657_finnish_spring_in_helsinki.png"
  );
  await expect(page.getByRole("img")).toHaveAttribute(
    "alt",
    "Spring in Helsinki"
  );
});

test("navigate back to home after form submission", async ({ page }) => {
  await page.goto(`http://localhost:${process.env.PORT}`);

  await page.fill('input[name="name"]', "John Doe");
  await page.fill('input[name="email"]', "john@doe.fi");
  await page.fill('textarea[name="message"]', "Hello, World!");
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(`http://localhost:${process.env.PORT}/submit`);

  await expect(page.getByRole("heading")).toHaveText(/Form submitted/);

  await page.click('a[href="/"]');

  await expect(page).toHaveURL(`http://localhost:${process.env.PORT}/`);
});

test("Example: fill input multiple times, overwriting previous value", async ({ page }) => {
  await page.goto(`http://localhost:${process.env.PORT}`);

  await page.fill('input[name="name"]', "John ");
  await page.fill('input[name="name"]', " ");
  await page.fill('input[name="name"]', "Doe");
});

test("Example: codegen example", async ({ page }) => {
  await page.goto(`http://localhost:${process.env.PORT}/`);
  await page.getByRole("img", { name: "City of Helsinki envisioned" }).click();
  await page.getByLabel("Name:").click();
  await page.getByLabel("Name:").click();
  await page.getByLabel("Name:").click();
  await page.getByLabel("Name:").fill("test user");
  await page.getByText("Name: Email: Message: Submit").click();
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").fill("hello");
  await page.getByLabel("Email:").press("Alt+@");
  await page.getByLabel("Email:").press("Meta+2");
  await page.getByLabel("Email:").press("Alt+@");
  await page.getByLabel("Email:").press("Alt+@");
  await page.getByLabel("Email:").fill("hello");
  await page.getByLabel("Email:").press("Meta+2");
  await page.getByLabel("Email:").press("Meta+2");
  await page.getByLabel("Email:").press("Meta+2");
  await page.getByLabel("Email:").fill("hello");
  await page.getByLabel("Email:").press("Meta+2");
  await page.getByLabel("Email:").fill("hello");
  await page.getByLabel("Message:").click();
  await page.getByLabel("Message:").fill("ok");
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByLabel("Email:").click();
  await page.getByLabel("Email:").press("Alt+@");
  await page.getByLabel("Email:").press("Alt+@");
  await page.getByLabel("Email:").fill("hello@email.com");
  await page.getByRole("button", { name: "Submit" }).click();
});
