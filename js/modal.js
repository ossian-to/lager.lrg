const modalNamespace = (function () {
  // 按下 Esc 鍵觸發的事件處理函數
  function closeModalOnEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  // 開啟和關閉 modal 的事件處理函數
  function handleModalClick(event) {
    const modal = event.target.closest(".modal");
    if (
      modal &&
      (event.target.matches(".close-modal, .modal") ||
        event.target.getAttribute("aria-label") === "Close")
    ) {
      closeModal();
    }
  }

  // 開啟 modal 的函數
  function openModal(modalId) {
    const modal = document.querySelector(`#${modalId}`);
    modal.classList.add("show");

    // 使用統一的事件委派
    document.body.addEventListener("click", handleModalClick);
    // 按下 Esc 鍵關閉 modal
    document.addEventListener("keydown", closeModalOnEscape, { once: true });
    // 在 modal 打開時，將頁面內容標示為不可用
    document.body.setAttribute("aria-hidden", "true");
  }

  // 關閉 modal 的函數
  function closeModal() {
    const modals = document.querySelectorAll(".modal.show");
    modals.forEach((modal) => {
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "false");
    });

    // 解除事件委派
    document.body.removeEventListener("click", handleModalClick);

    // 在 modal 關閉時，將頁面內容標示為可用
    document.body.removeAttribute("aria-hidden");
  }

  return {
    open: openModal,
    close: closeModal,
  };
})();
