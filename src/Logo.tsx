import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={94}
      viewBox="0 0 106 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105.169 47.01c0-6.976-8.725-13.587-22.102-17.687 3.087-13.653 1.715-24.514-4.33-27.992C77.344.515 75.715.13 73.935.13v4.787c.986 0 1.78.193 2.444.558 2.915 1.674 4.18 8.05 3.194 16.25-.236 2.018-.622 4.143-1.093 6.31-4.202-1.03-8.79-1.824-13.612-2.339-2.894-3.971-5.896-7.578-8.918-10.733C62.938 8.458 69.498 4.895 73.957 4.895V.108c-5.895 0-13.613 4.207-21.416 11.505C44.738 4.358 37.021.193 31.126.193V4.98c4.437 0 11.019 3.542 18.007 10.003a101.352 101.352 0 00-8.853 10.712c-4.845.515-9.433 1.31-13.634 2.361a64.874 64.874 0 01-1.115-6.225c-1.007-8.2.236-14.575 3.13-16.271.643-.386 1.479-.558 2.465-.558V.215c-1.8 0-3.43.386-4.845 1.202-6.023 3.478-7.374 14.318-4.265 27.927C8.681 33.466 0 40.056 0 47.011c0 6.976 8.725 13.588 22.101 17.688-3.087 13.652-1.715 24.514 4.33 27.991 1.394.816 3.023 1.202 4.824 1.202 5.895 0 13.612-4.207 21.415-11.505 7.803 7.255 15.52 11.42 21.415 11.42 1.801 0 3.43-.387 4.845-1.203 6.024-3.477 7.374-14.317 4.266-27.927 13.29-4.1 21.973-10.711 21.973-17.666zM77.258 32.694c-.793 2.769-1.78 5.624-2.894 8.479-.879-1.717-1.8-3.435-2.808-5.152a116.166 116.166 0 00-3.087-5.023 96.62 96.62 0 018.789 1.696zM67.44 55.554c-1.672 2.898-3.387 5.646-5.166 8.2-3.194.28-6.431.43-9.69.43-3.237 0-6.474-.15-9.646-.408a118.303 118.303 0 01-5.188-8.157 111.861 111.861 0 01-4.459-8.544c1.33-2.876 2.83-5.753 4.438-8.565 1.672-2.898 3.387-5.645 5.166-8.2a111.41 111.41 0 019.69-.43c3.236 0 6.473.151 9.646.409 1.779 2.554 3.515 5.28 5.187 8.157a111.86 111.86 0 014.46 8.543 120.245 120.245 0 01-4.438 8.565zm6.924-2.79a92.07 92.07 0 012.958 8.543 96.072 96.072 0 01-8.832 1.717c1.05-1.653 2.101-3.348 3.087-5.087a121.967 121.967 0 002.787-5.173zM52.627 75.668a88.446 88.446 0 01-5.96-6.87c1.93.087 3.902.15 5.896.15 2.015 0 4.008-.042 5.96-.15a83.767 83.767 0 01-5.896 6.87zM36.678 63.024a96.586 96.586 0 01-8.789-1.696c.793-2.769 1.78-5.624 2.894-8.479a101.69 101.69 0 002.808 5.152 142.28 142.28 0 003.087 5.023zm15.842-44.67a88.466 88.466 0 015.96 6.869c-1.93-.086-3.902-.15-5.896-.15a108.7 108.7 0 00-5.96.15 83.748 83.748 0 015.896-6.87zM36.657 30.997a118.61 118.61 0 00-5.874 10.24 92.08 92.08 0 01-2.958-8.544 103.999 103.999 0 018.832-1.696zm-19.4 26.876C9.668 54.63 4.759 50.38 4.759 47.01s4.909-7.642 12.498-10.862c1.843-.794 3.858-1.503 5.938-2.168 1.221 4.207 2.83 8.586 4.823 13.073-1.972 4.465-3.559 8.822-4.76 13.008a65.064 65.064 0 01-6.001-2.19zm11.532 30.674c-2.915-1.674-4.18-8.05-3.194-16.25.236-2.017.622-4.142 1.094-6.31 4.201 1.03 8.789 1.824 13.612 2.34 2.894 3.97 5.895 7.577 8.918 10.732-6.989 6.505-13.548 10.068-18.007 10.068-.965-.021-1.78-.215-2.422-.58zM79.638 72.19c1.008 8.2-.235 14.576-3.13 16.272-.642.386-1.479.558-2.465.558-4.437 0-11.018-3.542-18.006-10.004a101.364 101.364 0 008.853-10.711c4.845-.515 9.432-1.31 13.634-2.361.493 2.168.879 4.25 1.114 6.246zm8.254-14.317c-1.844.794-3.86 1.502-5.938 2.168-1.222-4.208-2.83-8.587-4.824-13.073 1.972-4.465 3.559-8.823 4.76-13.009a67.928 67.928 0 016.023 2.19c7.589 3.241 12.498 7.492 12.498 10.862-.022 3.37-4.93 7.642-12.52 10.861z"
        fill="#81D8F7"
      />
      <path
        d="M52.563 56.82c5.41 0 9.796-4.391 9.796-9.81 0-5.417-4.386-9.81-9.796-9.81-5.41 0-9.797 4.393-9.797 9.81 0 5.419 4.386 9.81 9.797 9.81z"
        fill="#81D8F7"
      />
    </svg>
  )
}