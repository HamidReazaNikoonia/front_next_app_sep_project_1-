import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    height={150}
    viewBox="0 0 400 400"
    {...props}
  >
    <path
      fill="#ffceb6"
      d="M223.246 75.018a11.292 11.292 0 0 0-6.9.278c-1.354.446-.778-.6-1.308-4.362a27.53 27.53 0 0 0-3.846-11.418c-4.514-6.616-18.83-8.37-23.93 1.12-.234.862 3.176-2.116 3.654-.68.476 1.502-2.65 1.218-3.312 3.2a.938.938 0 0 1-1.492.164 45.53 45.53 0 0 0-1.62 6.258c-2.176 10.776-1.018 19.528 9.642 22.348 7.262 1.928 9.47.55 9.38 2.46a43.476 43.476 0 0 0 1.834 13.782c.216.618.906 2.33 1.556 2.33.012 0 .034.012.046.012a11.184 11.184 0 0 0 5.816-2.75c1.744-6.582 5.342-6.052 5.444-6.766.17-1.22-.786-8.65-.954-10.124-1.488-12.694-1.61-8.888 3.294-9.784a7.298 7.298 0 0 0 4.044-2.426c.764-1.08-.514-2.728-1.712-3.28z"
    />
    <path
      fill="#5bbd8f"
      d="M124.742 96.548c-.248-1.186-2.068-.682-1.82.504a11.712 11.712 0 0 1-2.522 9.336c-4.326 5.7-11.542 7.306-18.578 8.574 6.9-6.696 2.364-17.4.576-15.114-2.666 3.4-5.174 6.8-5.062 11.12 0 .2.37 5.086.34 4.768a34.952 34.952 0 0 0-13.352 4.874c4.916-8.81 2.354-19.084-3-27.726-.458-.74-1.844-.506-1.75.47.84 8.826-5.784 23.58 1.4 29.2.736.552.92-.16-.34 1.304a24.2 24.2 0 0 0-5.132 10.532A24.05 24.05 0 0 0 71 123.698c-2.322-2.8-5.38-4.646-12.612-9.676-.812-.564-1.728.516-1.292 1.292 4.958 8.842 2.322 19.852 17.708 23.088-1.434 13.344 4.06 24.2.246 48.546-.186 1.186 1.634 1.692 1.822.506a119.432 119.432 0 0 0 .152-35.302.816.816 0 0 0 .858-.586c9.242-3.382 14-12.906 15.888-22.066.176-.834-.928-1.704-1.574-.916-5.146 6.164-13.226 9.952-15.642 18.378-2.484-40 32.492-22.338 45.494-39.634a13.532 13.532 0 0 0 2.69-10.78M64.052 128.8c-1.75-3.58-2.466-7.538-3.876-11.25 9.176 6.334 11.686 7.522 13.8 18.732-4.944-1.164-7.6-2.762-9.922-7.482m19.2 10.852c2.466-2.526 5.296-4.686 7.832-7.128-2.066 7.162-6.082 14.126-13.128 17.028a17.08 17.08 0 0 1 5.296-9.9m16.5-32a19.6 19.6 0 0 1 3.134-5.366 10.296 10.296 0 0 1-3.346 12.178 14.682 14.682 0 0 1 .212-6.812M65.73 159.468a34.864 34.864 0 0 0-7.422-10.052.786.786 0 0 0 .236-.516c.428-.686-.53-.174 1.056-2.068 4.348-5.2.6-10.966-3.934-15.852a.952.952 0 0 0-1.572.4 21.856 21.856 0 0 0 2.054 16.242 19.37 19.37 0 0 0-9.536-3.852l-.164-.224a16.8 16.8 0 0 0-10.6-10.298 7.718 7.718 0 0 0 2.866 8.08c3.458 2.8 6.304 2.17 4.132 2.466a14.966 14.966 0 0 0-11.966 7.538c-.2.8-5.51 3.976-1.186 17.252 1.164 3.556 8.942-7.508 3.628-16.946a.894.894 0 0 0-.258-.294 14.2 14.2 0 0 1 13.834-5.636 10.866 10.866 0 0 0-7.6 8.526 29.4 29.4 0 0 1-.81 6.422c-.27.718.516 1.304 1.162 1.164a16.048 16.048 0 0 0 12.084-14.68 26.952 26.952 0 0 1 11.944 12.412c2.09 3.984-.938-1.95-6.882 1.974-2.466 1.6-4.322 4.31-7.2 5.238a.95.95 0 0 0 .246 1.854c3.44.212 6.894.576 10.334.634 4.238.076 4.066-2.92 5.426-4.58a.912.912 0 0 0 .14-.258 56.43 56.43 0 0 1 2.126 22.678.94.94 0 0 0 1.88 0c1-7.684-.098-19.8-4.018-27.634m-34.76 6.906c-1.304-4.416-2.09-9.548.94-13.328a13.176 13.176 0 0 1-.94 13.328m9.76-6.858c.528-3.064-.28-5.524 1.914-8.584a9.098 9.098 0 0 1 7.186-3.77 14.146 14.146 0 0 1-9.1 12.354m14.8-25.882c2.884 3.2 5.49 7.524 3.2 11.214-.342.552-.776 1.034-1.152 1.526a19.978 19.978 0 0 1-2.054-12.74"
    />
    <path
      fill="#e59e70"
      d="M91.014 187.184c-30.914-.36-29.158-.056-29.158.95-.336 35.856-.682 34.28.622 34.28 23.076.338 22.524.616 22.7-.378 7.022-34.836 7.506-34.852 5.836-34.852m-6.8 30.18c-.234 1.162-.468 2.324-.692 3.476-27.252-.42-17.08-.234-20.082-.294.074-7.17.178-19.99.306-31.472h26.13l-5.662 28.29m41.338-29.5c-.328-1.312-1.942-.332-10.416-.668h-15.15c-5.5.238-3.938-2.476-6.048 12.2-3.298 23.4-3.78 23.688-2.278 23.688 30.768.318 29.018.024 29.124-.694 5.076-36.072 4.91-34.03 4.768-34.526"
    />
    <path
      fill="#ff9f48"
      d="M139.374 84.898a14.026 14.026 0 0 1-3.974 3.524 72.886 72.886 0 0 0 2.818-7.6.948.948 0 0 0-1.572-.916 54.722 54.722 0 0 1-7.208 5.294l1.022-6.8a.95.95 0 0 0-1.574-.916c-12.286 10.556-20.178 15.018-9.922 23.656.928.774 2.266-.552 1.326-1.328-8.438-7.052-3.108-9.94 7.952-19.306-1.2 7.946-2.732 10.5 7.138 2.866a75.174 75.174 0 0 1-2.736 6.6c-.316.658.224 1.702 1.07 1.386a16.682 16.682 0 0 0 5.448-3.442 17.158 17.158 0 0 1-12.06 14.386.944.944 0 0 0 .504 1.82c15.054-4.228 15.146-23.68 11.768-19.224"
    />
    <path
      fill="#5bbd8f"
      d="M107.28 173.632a48.57 48.57 0 0 0-.694-6.212c-1-5.37-3.69-7.686-9.488-11.708-.634-.448-1.692.304-1.386 1.068 1.492 3.652 2.876 7.374 4.52 10.956 4.858 10.6 5.836-1.364 5.226 18.472a.94.94 0 0 0 1.88 0c.096-3.286.2-9.298-.058-12.576m50.93-54.572a28.374 28.374 0 0 1-9.5 10.486c-6.628 4.698-14.164 7.4-20.844 12.014 2.772-9.64 10.264-10.584 8.02-25.2 0-3.07-2.234-2.162-2.032-.882.714 4.138-3.29 5.562-9.172 13.094-3.086 3.976-3.86 7.972.858 14.116a1 1 0 0 0 .4.306 28.472 28.472 0 0 0-10.54 14.832c-1.234-5.238-5.332-9.76-9.418-13.236-3.018-2.578-3.132 11.848 5.942 20.046a.986.986 0 0 0 1.62-.6c-2.752 30.26-1.67 19.926-2.078 23.264-.142 1.2 1.738 1.186 1.878 0 .6-4.814 1.184-25.308 4.522-29.758a16.016 16.016 0 0 0 11.45 1.948c4.732-.704 7.362-4.532 9.828-8.22a24.768 24.768 0 0 0 3.63-7.246.948.948 0 0 0-1.574-.916c-8.048 8-13.778 2.962-20.54 8 6.468-9.618 18.734-12.908 28.2-19.342a31.656 31.656 0 0 0 11.052-11.848 12.746 12.746 0 0 1-1.704-.846m-44.67 44.778c-.104.21.2-.098-.294-.564a21.748 21.748 0 0 1-7.08-16.042c4.662 4.274 9.078 9.982 7.374 16.6m8.6-11.556c5.266-3.548 9.8-.328 17.51-5.508-1.094 2.098-4.6 7.762-7.2 9.524-3.248 2.186-10.624 2-13.706-.47a11.4 11.4 0 0 1 3.4-3.546"
    />
    <path
      fill="#ff9f48"
      d="M176.73 108.538c-.79-1.052-1.428.01-5.814 1.232a42.176 42.176 0 0 0 1.914-4.414.95.95 0 0 0-1.162-1.164 44.06 44.06 0 0 0-5.226 2.102l.248-5.26a.952.952 0 0 0-1.422-.81c-20.988 10.8-7.154 25.134 4.874 18.976 5.104-2.6 7.236-9.748 6.588-10.662M118.354 134.8a35.142 35.142 0 0 1-3.758.716c.164-1.08.316-2.172.48-3.252.094-.634-.4-1.422-1.162-1.164-1.15.412-2.326.764-3.512 1.08.142-1.256.294-2.512.436-3.768.444-3.702-11.628 4.238-8.128 10.534a9.576 9.576 0 0 0 10.652 3.874c3.148-1.2 7.6-7.956 5-8.02"
    />
    <path
      fill="#ffd35c"
      d="M215.564 317.23c-19.436-2.896-10.372-1.538-36.92-5.496l1.138-8.268c-.228-.058-2.046-.546-1.8-.48-1.274 9.338-1.706 10.302-.622 10.462q6.57.97 13.14 1.95c27.626 4.106 26.668 4.338 26.846 2.912.376-3.054.764-6.106 1.14-9.148-.588.07-1.222.116-1.904.142-.352 2.618-.68 5.272-1.01 7.926m44.278-123.588c-.894-.928-7.682-1.2-14.492-1.244A48.552 48.552 0 0 1 235 209.308a45.542 45.542 0 0 0 15.326-3.71c7.574-4.04 11.4-10.03 9.524-11.956m27.056 99.056c-63.59-87.118-56.512-78.764-58.482-77-1.582 1.412.444-4.46-12.824 45.68-1.99 7.518-1.71 6.538-1.738 6.624a.944.944 0 0 0 1.82.504c1.77-6.676 12.886-48.93 13.54-51.354.11-.43-.414-.938 4.8 6.166 59.258 81.258 51.498 68.274 50.05 73 1.222.212 5.82 1.152 6.384 1.246 1.274.226.87 2.116-.338 1.726-2.112-.342-4.214-.728-6.316-1.104-.094 9.264 13.388 9.054 13.388.212a6.8 6.8 0 0 0-10.276-5.696m-94.594-9.336c-5.252-8.046 1.4-.908-21.262-21.212-55.328-49.554-43.296-38.69-44.954-40.292-.086-.09-.016-.156-.576 2 .264.236 33.27 29.83 41.842 37.508 25.674 23.016 21.65 19.47 24.074 21.6zm-42.026-46.414c10.946 9.888 27 24.4 33.846 30.58-.4-1.162-.764-2.35-1.104-3.536-10.582-9.582-54.746-49.424-55.088-49.768-.176.682-.342 1.364-.518 2.044 3.08 2.784.574.514 22.864 20.68m-56.52 56.016c-.212.318-2.912 5.7-3.03 5.93-.552 1.08-2.172.13-1.62-.95l2.982-5.848a6.616 6.616 0 0 0-6.048.774 6.772 6.772 0 0 0 3.84 12.26 6.696 6.696 0 0 0 3.876-12.166"
    />
    <path
      fill="#86f2aa"
      d="M259.556 153.538c2.772 1.832 5.542 3.676 8.302 5.508-.8-8.142-8.174-7.048-13.716-8.6 1.706 8.362 4.702 11.482 13.27 11.098.212-.584 1.896.738-8.82-6.364-.986-.67-.046-2.302.964-1.634"
    />
    <path
      fill="#86f2aa"
      d="M264.852 163.414c-.558.81-5.108 2.63-9.936 1.892a.945.945 0 0 1 .506-1.82 13.478 13.478 0 0 0 6.106-.53 10.272 10.272 0 0 1-4.956-2.688.8.8 0 0 1-.622-.142c-1.048-.746-1.894.064-9.2 3.4 10.436 8.38 17.92 5.6 20.656-.128a20.438 20.438 0 0 1-2.548.022m.006-20.168c-.516-.282-1.528-.67-2.4-1.164-.6 2.83-1 6.166.762 8.4a9.02 9.02 0 0 1 4.628 3.078 10.968 10.968 0 0 0-2.336-6.26c-.846-.868.492-2.2 1.326-1.326 3.32 3.43 3.282 11.354 2.8 12.154a24.156 24.156 0 0 1 .188 2.948c4.706-2.4 6.486-11.716-4.966-17.838"
    />
    <path
      fill="#ac47f5"
      d="M227.528 51.982c.328.706 1 1.268 1.26 1.984a2.506 2.506 0 0 0 2.76-2.044 9 9 0 0 0-2.902-8.114c-2.12-1.372-6.706-.666-9.168-.152a19.4 19.4 0 0 1 8.05 8.326m-28.192 84.74c5.45-6.8 7.824-16.436 12.412-24.978.134-1.6.234-1.286 0-1.186-4.15 2.478-6.832 2.44-8.28-2.08-8.6 9.43-14.226 25-18.144 37.158a30.036 30.036 0 0 0 14.022-8.914m23.806 14.796a32.774 32.774 0 0 0 4.86 7.916 96.87 96.87 0 0 0 2.844-1.914c-.498-.8-3.288-5.73-4.864-8.714a38.286 38.286 0 0 1-2.84 2.712m4.214-4.192a160.498 160.498 0 0 0 5.074 9.054 69.064 69.064 0 0 0 13.342-12.824 167 167 0 0 0-10.382-26.222c.428 10.732-.836 21.6-8.034 30"
    />
    <path
      fill="#ac47f5"
      d="M232.628 167.63c-8.388-9.488-8.762-11.16-10.876-15.564-11.67 9.152-29.054 13.716-43.73 15.366a6.728 6.728 0 0 0 1.866 4.438c10.28 10.886 27.582 11.676 42.476 10.24a86.426 86.426 0 0 0 21.866-4.18 54.97 54.97 0 0 1-11.6-10.3"
    />
    <path
      fill="#ac47f5"
      d="M200.228 161.148c17.29-5.24 32.07-15.132 34.106-33.082.952-8.492-1.11-21.076-9.28-23.438-6.54-1.912-10.526 4.692-13.742 11.544-10.652 22.974-8.172 26.876-37.824 34.972-14.376 3.882-14.53 2.014-13.574 3.512 6.748 11.23.178 12.636 5.908 12.318a150.778 150.778 0 0 0 34.4-5.826"
    />
    <path
      fill="#ff8684"
      d="M180.862 211.444c-4.874-7.916-1.748-16.354 14.304-12.81 4.314-5.762 9.176-10.906 10.906-16.2-9.14-.754-21.8-5.252-27.064-11.698-21.112 8.488-27.974 26.864-24.472 41.382 11.062-.27 8.248-.622 26.034-1.048m1.268 1.854c-34.14.816-25.506.614-26.95.646 3.6 11.698 13.774 21.444 25.176 28.114.012-.294 0-.6.012-.892a75.254 75.254 0 0 1 4.886-24.286 35.124 35.124 0 0 1-3.124-3.582"
    />
    <path
      fill="#ff8684"
      d="M244.694 177.704a89.866 89.866 0 0 1-22.342 4.4c-25.076 2.336-8.6-5.288-22.886 13.916-5.922 8-10.11 12.492-13.6 21.8-12.422 33.354 4.548 69.488 16.89 74.142 4.458 1.678 8.458.07 9.588-4.946 2.46-10.954-6.652-20.384-6.338-37.9.628-33 40.758-32.724 39.788-70.706z"
    />
    <path
      fill="#5bbd8f"
      d="M360.584 337.3a49.094 49.094 0 0 0-10.134 18.53.946.946 0 0 0 1.82.506 46.964 46.964 0 0 1 9.654-17.698c.786-.916-.542-2.254-1.34-1.338m13.616-.624a46.69 46.69 0 0 0-16.24 19.742c-.482 1.104 1.15 2.066 1.62.95a44.952 44.952 0 0 1 15.56-19.07c1-.682.058-2.314-.94-1.622m14.38.924a61.428 61.428 0 0 0-19.588 17.1c-.728.974.904 1.914 1.622.95a59.254 59.254 0 0 1 18.918-16.428c1.068-.576.118-2.2-.952-1.622m-377.198 4.444c-1-.67-1.96.962-.952 1.62a20.416 20.416 0 0 1 9.044 16.3.94.94 0 0 0 1.878 0 22.414 22.414 0 0 0-9.97-17.92m6.318-7c-.834-.88-2.16.448-1.326 1.328a36.772 36.772 0 0 1 9.112 17.122c.27 1.186 2.08.68 1.82-.506a38.766 38.766 0 0 0-9.6-17.944m10.082 2.326.6 13.458c.06 1.2 1.938 1.2 1.88 0l-.6-13.458c-.046-1.2-1.936-1.2-1.878 0m121.342-1.95a81.748 81.748 0 0 0-6.012 15.102.944.944 0 0 0 1.82.504 79.31 79.31 0 0 1 5.824-14.654c.552-1.08-1.068-2.032-1.632-.952m6.894 2.98a56.686 56.686 0 0 0-6.13 12.614c-.388 1.152 1.42 1.644 1.82.506a54.488 54.488 0 0 1 5.942-12.156c.658-1.034-.964-1.984-1.632-.964m7.046 4.466a.968.968 0 0 0-1.292.34c-1.376 1.98-5.862 10.276-3.534 10.91a.952.952 0 0 0 1.162-.658c1.702-8.084 5.472-9.538 3.664-10.6m46.492-3.986c-.882-.832-2.22.494-1.328 1.328a29.242 29.242 0 0 1 7.622 11.872c.388 1.14 2.2.658 1.82-.504a31.458 31.458 0 0 0-8.114-12.696m6.906-3.534c-.81-.906-2.138.434-1.328 1.328a28.8 28.8 0 0 1 6.74 13.422c.246 1.186 2.056.682 1.82-.504a30.68 30.68 0 0 0-7.232-14.246m9.512-.858q.424 6.974.856 13.952c.072 1.2 1.962 1.2 1.88 0q-.422-6.976-.858-13.952c-.07-1.2-1.95-1.2-1.878 0m11.978 6.848a.968.968 0 0 0-1.294.34c-5.132 7.04-5.86 7.502-4.684 8.2 1.046.616 1.166-.2 6.318-7.256a.956.956 0 0 0-.34-1.292"
    />
    <path
      fill="#1d1d1b"
      d="M186.512 212.82a74.06 74.06 0 0 0-6.436 27.98 75.424 75.424 0 0 0 2.984 23.2c3.532 12.302 14.17 33.8 26.176 29.69 5.578-1.916 5.824-9.138 5.048-14.012-1.936-12.024-16.474-33.05 2.984-53.69 9.336-9.928 30.176-22.136 30.4-46.34a23.788 23.788 0 0 1-1.87-.872c.55 35.886-39.764 37.642-40.336 70.452-.316 17.6 9.364 26.888 6.906 37.836-1.124 5-4.858 6.166-9.338 4.476-11.776-4.442-19.768-29-20.868-42.558-2.966-37.286 19.914-51.076 25.12-66.422-3.222-.238-.716-.974-4.322 5.098-5.252 8.844-10.498 13.056-15.524 23.298-2.14.056-58.93 1.4-58.976 1.4.71-2.8 9.334-37 9.5-37.72a.946.946 0 0 0-1.82-.506c-18.246 72.6-14.284 60.18-19.528 70.144a59.572 59.572 0 0 0-66.222 9.8C5.254 294.42 40.28 367.508 97.19 362.03c27.67-2.674 51.572-24.332 55.146-52.222 2.952-23.264-7.88-49.162-34.056-64.648 4.682-9.126 3.17-4.356 8.268-25.142l1.444-5.742c50.84-1.16 57.214-1.428 58.53-1.456m-49.778 50.214c28.824 36.056 11.012 84.69-30.662 95.486-54.726 14.164-97.84-52.47-60.6-96.766 17.4-20.718 46.286-27.722 70.224-15.842l-4.344 8.502A48.516 48.516 0 0 0 58 262.612c-36.832 32.866-8.17 92.318 38 87.898 46.696-4.482 65.05-66.462 17.074-95.25q2.168-4.244 4.346-8.49a63.382 63.382 0 0 1 19.342 16.264m-46 35.864c.858-1.686 20.69-40.47 21.444-41.948a52.356 52.356 0 0 1 26.574 36.946c8.238 47.56-55.8 76.728-86.314 34.654-29.58-40.88 15.018-92.84 58.048-72.456-1.088 2.094-21.296 41.66-21.4 41.864-.516 1.07 1.104 2.02 1.656.94m262.486 1.374c-1.8-48.284-55.458-80.702-97.458-50.2.376.504.74 1.01 1.116 1.526 24.922-18.156 59.184-15.062 80.36 11.426 28.748 35.962 11 84.704-30.662 95.486-41.526 10.75-81.124-26.542-73.444-69.226l9.4 1.654a50.78 50.78 0 0 0 5.12 32.694c25.478 47.872 95.708 26.852 94.124-23.37-1.514-39.414-45.162-65.624-79.244-40.914.376.506.74 1 1.116 1.528 32.552-23.628 74.8 1.366 76.26 39.386 1.476 44.112-58.014 68.22-86.97 28.278a48.874 48.874 0 0 1-8.538-37.274c1.262.222 37.53 6.6 39.328 6.93 8.656 1.546 5.948.964 6.436 1.126 1.186.212 1.69-1.6.504-1.82-.562-.092-5.448-.962-6.67-1.174-.096-.014-37.564-6.62-39.222-6.904a47.478 47.478 0 0 1 10-20.328c7.4-8.782 8.4-5.732 6.246-8.632a49.908 49.908 0 0 0-18.13 28.63l-9.4-1.656A58.848 58.848 0 0 1 246 261.742c9.314-11.102 10.65-7.386 8.29-10.558a61.502 61.502 0 0 0-22.64 35.924c-.962-.176-10.158-1.782-10.24-1.8-1.188-.212-1.692 1.6-.506 1.82 1.61.278 10.146 1.78 10.382 1.82-9.948 57.124 57.85 97.42 102.378 56.944a58.78 58.78 0 0 0 19.588-45.612M231.56 51.922c2.454 2.326 12.612 11.616 17.944 11.344 6.094-.316 2.782-7.69 2.782-7.69 16.676 4.92 22.864-8.868 21.268-14.54s-4.8-2.454-4.8-2.454a16.2 16.2 0 0 1-20.62 4.486c-10.922-5.32-18.11-1.044-20.082.412 2.566 1.08 4.156 5.85 3.512 8.442M182.496 60.6s-1.716 4.086.656 6.33c-1.574 6.65-2.654 15.138 1.2 20.8 3.614 5.328 11.358 7.314 17.8 6.988a67.012 67.012 0 0 0 .212 7.364 30.056 30.056 0 0 0 .986 6.036c.034.128.082.258.116.386 1.472 4.534 4.14 4.552 8.28 2.08a.692.692 0 0 1 .152-.094 21.136 21.136 0 0 1 .518-2.6c-1.058.822-4.2 2.854-5.462 2.432 0 0-.2-.056-.2-.06-2.8-1.554-2.8-13.27-2.654-16.51.09-1.918-2.626.172-9.924-1.762-11.328-3-11.844-12.624-9.278-24.062a38.12 38.12 0 0 1 1.258-4.546.934.934 0 0 0 1.49-.164 4.4 4.4 0 0 1 1.938-1.8c.42-.184 1.698-.388 1.374-1.4-.476-1.43-2.618-.216-3.652.682 5.032-9.37 19.062-7.448 23.664-.706a30.1 30.1 0 0 1 3.91 13.482c.106 1.224-.2 2.832 1.128 2.4 6.854-2.254 9.334.516 7.81 2.83a5.58 5.58 0 0 1-3.688 1.8c-4.874.952-4.318-2.42-2.8 10.452a89.714 89.714 0 0 1 .846 9.642c-.054.374-.2.266.658.012 1.624-.542 1.772 2.08-.27-14.95 9.214.698 16.098-16.244 10.274-31.614-8.4-22.308-43.4-15.652-50.026-.116-5.6 12.964 3.7 6.658 3.7 6.658"
    />
    <path
      fill="#1d1d1b"
      d="M57.24 228.742c2.074 1.072.32.704 44.896.576 6.152-.024 18.448-.058 18.154-.058a.94.94 0 0 0 0-1.88c-64.816.2-60.574.338-61.688-.07-3.274-1.2-2.8-4.308-2.582-6.612 1.79-16.856 1.284-14.092 2.054-14.092 11.512.07 65.534.248 65.412.248a.94.94 0 0 0 0-1.878c-7.954 0-66.4-.252-65.412-.248-.478 0-.5 1.244.4-6.87 4.644.028 69.584.212 68.2.212a.94.94 0 0 0 0-1.88c-19.382 0-66.744-.262-68-.222q.842-7.962 1.702-15.924c.754-6.936 4.464-3.56 72.07-3.56a.94.94 0 0 0 0-1.878c-76.4-.94-72.938-3.772-74.266 8.186-4.732 44.108-4.222 39.3-4.274 39.88a6.332 6.332 0 0 0 3.334 6.07M221 303.936c-3.72-3.274-20.05-12.05-34.76-9.054-11.068 2.252-17.44 5.73-6.472 8.56 7.288 1.872 43.76 10.278 43.134 2.772-.118-1.364-.904-1.4-1.902-2.278M78.778 275.482c-.224-.34-.446-.68-.658-1.022-.658-1-2.29-.07-1.62.952 2.378 3.658 5.066 7.8 5.296 8.162.658 1 2.29.07 1.62-.952-1.538-2.384-3.088-4.756-4.638-7.14m230.558-.14q-3.384 5.034-6.754 10.076c-.68 1 .954 1.948 1.622.95q3.384-5.04 6.754-10.088c.68-1-.954-1.948-1.622-.938m-19.764 41.83c-.228 7.19-3.28 8.934-1.702 9.874 2.102 1.2 3.502-7.02 3.6-9.874.036-1.21-1.856-1.21-1.89 0m14.06-11.004a.954.954 0 0 0-.222 1.726c4.53 1.968 4.824 4.468 5.954 3.218a.956.956 0 0 0 0-1.328c-1.58-1.67-4.88-3.842-5.732-3.616M103 322.48a.946.946 0 0 0 1.634-.952c-6.31-9.232-6.464-10.096-7.54-9.476a.962.962 0 0 0-.34 1.29q3.136 4.564 6.246 9.138m-24.904-12.32c-2.066 1.938-4.144 3.876-6.212 5.812a.94.94 0 0 0 1.328 1.328c6.31-5.912 7.148-6.236 6.212-7.14a.968.968 0 0 0-1.328 0"
    />
    <path
      fill="#ffceb6"
      d="M161.038 159.11a13.822 13.822 0 0 0-2.358-3.6 28.51 28.51 0 0 0-13.104.586c-10.6 4.012-10.842 15.034-4.852 11.134a8.848 8.848 0 0 0 2.384-2.326c.564-.858 2.09-.316 1.726.728-2.338 6.61 1.96 5.542 5.332.564.54-.8 1.818-.564 1.714.88-.308 3.688 1.46 3.726 4.522 1.492 3.442-2.504 1.652-2.512 4.6-2.512h.728a24.062 24.062 0 0 0-.692-6.946z"
    />
    <path
      fill="#1d1d1b"
      d="M202.318 68.6a1.772 1.772 0 0 0 0 3.524c2.12 0 2.102-3.524 0-3.524m-12.4.48a1.6 1.6 0 1 0-3.2 0 1.6 1.6 0 1 0 3.2 0m19.294-3.722c-1.622-3.98-5.774-4.88-5.684-3.066.044.926.732.84 1.6 1.174a4.638 4.638 0 0 1 2.288 2.42.938.938 0 0 0 1.8-.528m-8.306 11.556c-4.234 3.556-8.23 2.95-9.784 1.4-.904-.81-2.23.518-1.326 1.328 2.316 2.07 6.586 2.714 11.084-.364a4.486 4.486 0 0 1-2.452 4.556c-1.08.54-.13 2.172.95 1.62 4.924-2.472 3.778-10.442 1.528-8.536"
    />
    <path
      fill="#86f2aa"
      d="M284.312 138.178c-7.456-8.342-15.038-4.736-29.712-14.162-17.532-23.812-40.024-32.834-42.7-13.564-.854 6.282 2.6-9.98 13.658-7.692a15.828 15.828 0 0 0-2.09-.81c10.666.884 23.106 14.522 29.524 22.982a21.924 21.924 0 0 1-.19 2.8c-4.696-5.032-18-18.8-22.986-22.55a15.378 15.378 0 0 1 3.698 5.842c7.296 6.8 12.68 12.554 18.902 19.034a34.826 34.826 0 0 1-6.648 13.446 69.068 69.068 0 0 1-13.34 12.824c-6.214-10.2-4.276-9.778-6.424-7.574 1.078 2.04 4.092 7.48 4.864 8.712a70.976 70.976 0 0 1-2.842 1.916 32.458 32.458 0 0 1-4.864-7.916c-.494.422-.986.834-1.502 1.234a29.444 29.444 0 0 0 5.4 8.348c5.418 6.55 12.826 15.436 20.6 18.6 20.56 8.72 52.936-23.232 36.652-41.466m-14.456 24.954a.91.91 0 0 1-.424.06 11.314 11.314 0 0 1-9.536 7.468c-5.908.628-11.014-2.86-15.572-6.67a.954.954 0 0 1 .188-1.48c8.974-4.154 9.112-4.348 10.336-4.474-1.46-2.44-4.316-10.978-1.668-9.912a40.372 40.372 0 0 0 7.574 1.704 17.6 17.6 0 0 1 .574-10.498c.612-.73 1.668 0 1.574.8a5.554 5.554 0 0 0 .576.292c15.772 7.888 13.6 19.914 6.378 22.7"
    />
    <path
      fill="#1d1d1b"
      d="M133.114 171.284c2.24 2.276 8.716 3.658 11.6.762 2.052.31 4.032-1.366 5.436-2.888 1.142 5 6.2 2.388 9.854-1.256h1.926a.924.924 0 0 0 .904.634c34.85-1.376 73.508-10.752 73-45.636-.266-20.982-14.306-25.166-21.2-15.782.034-.138.084-.224-.024.046-9.568 13.4-8.534 28.864-24.4 36.498-10.238 4.962-32.41 8.538-32.482 9.818-7.678-.844-16.126.816-20.62 7.27-2.626-1.898-6.6.262-6.118 5.554a8.21 8.21 0 0 0 2.124 4.98m40.4-20.152c13.628-3.71 23.122-6.156 29.616-16.6 7.4-11.96 10.852-33.116 21.948-29.91 8.2 2.438 9.582 15.09 8.632 23.58-3.356 29.666-39.974 37.158-69.664 38.398a12.44 12.44 0 0 0-.034-2.89c-1.548-13.472-11.138-6.986 9.512-12.576m-35.642 11.916c5.862-10.186 21-7.568 20.8-7.55 2.454 2.454 3.088 7.062 3.054 10.522H161c-2.94 0-1.378.226-4.6 2.514-.858.622-3.076 2.312-4.086 1.114-.78-.92-.314-3.55-.424-2.758a.95.95 0 0 0-1.726-.73 14.276 14.276 0 0 1-1.69 2.044c-3.2 3.292-5.454 2.702-3.642-2.6.364-1.046-1.162-1.586-1.726-.728-3.19 4.854-8.4 3.704-5.226-1.822m-4.92 1.152c.476-2.094 2.214-2.668 3.042-1.938.222.168.182-.096-.142.6-2.634 5.55 1.888 9.174 6.472 5.6a4.148 4.148 0 0 0 .634 2.62c-2.762 2-11.648.266-10-6.882"
    />
  </svg>
)
export default SvgComponent
