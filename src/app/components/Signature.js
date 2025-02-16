"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { RotateCcw } from "lucide-react"

export default function Component() {
  const [key, setKey] = useState(0)

  return (
    <div className="flex flex-col items-end gap-2">
      <motion.svg 
        key={key} 
        width="284.768" 
        height="70.487" 
        viewBox="0 0 284.768 70.487" 
        className="w-full max-w-xl text-stone-700 dark:text-stone-500"
      >
        <g
          stroke="currentColor"
          strokeLinecap="round"
          fillRule="evenodd"
          strokeWidth="3"
          fill="none"
          className="text-primary"
        >
          {[
  "M 7.118 57.301 L 7.018 57.601 Q 21.689 38.279 32.038 25.358 A 800.782 800.782 0 0 1 34.418 22.401 A 482.65 482.65 0 0 1 38.237 17.788 Q 43.618 11.376 46.918 8.001 A 45.818 45.818 0 0 1 48.15 6.768 Q 49.957 5.031 51.018 4.501 A 3.382 3.382 0 0 1 51.48 4.279 Q 52.488 3.891 53.267 4.476 A 2.21 2.21 0 0 1 53.418 4.601 Q 54.318 5.401 54.118 7.551 Q 53.966 9.19 53.231 12.081 A 85.257 85.257 0 0 1 52.718 14.001 Q 51.264 19.207 48.343 27.52 A 522.552 522.552 0 0 1 46.418 32.901 A 708.108 708.108 0 0 1 42.967 41.937 Q 41.125 46.669 39.024 51.897 A 1173.721 1173.721 0 0 1 38.418 53.401 L 38.418 53.501 Q 52.018 33.901 61.318 21.601 Q 66.428 14.842 69.84 10.937 A 72.918 72.918 0 0 1 71.218 9.401 Q 73.618 6.901 75.018 5.901 A 4.483 4.483 0 0 1 75.556 5.59 Q 76.133 5.312 76.644 5.312 A 1.781 1.781 0 0 1 77.618 5.601 Q 78.518 6.201 78.418 7.801 A 6.933 6.933 0 0 1 78.355 8.683 Q 78.193 9.932 77.618 11.801 Q 76.318 15.901 73.118 23.801 Q 71.368 28.129 67.075 38.181 A 2821.633 2821.633 0 0 1 66.318 39.951 Q 62.567 48.717 60.222 54.465 A 366.556 366.556 0 0 0 58.918 57.701 A 156.235 156.235 0 0 0 57.91 60.353 Q 56.497 64.182 56.118 66.001 Q 56.018 66.401 56.018 66.801 L 56.118 66.901 L 56.318 67.101 Q 56.456 67.376 56.499 67.604 A 1.064 1.064 0 0 1 56.518 67.801 Q 56.518 68.447 56.007 68.837 A 1.695 1.695 0 0 1 55.918 68.901 A 1.542 1.542 0 0 1 55.219 69.064 Q 54.909 69.064 54.568 68.951 Q 53.818 68.701 53.618 67.901 Q 53.374 67.251 53.593 66.007 A 10.815 10.815 0 0 1 53.718 65.401 A 19.985 19.985 0 0 1 54.068 63.969 Q 54.743 61.551 56.318 57.501 A 174.138 174.138 0 0 1 57.211 55.276 Q 59.618 49.376 66.118 34.101 Q 71.618 21.101 73.818 15.301 Q 75.518 10.601 75.918 8.401 Q 74.718 9.301 73.018 11.201 A 89.927 89.927 0 0 0 71.349 13.088 Q 68.668 16.201 64.918 21.001 A 544.779 544.779 0 0 0 55.537 33.516 Q 50.749 40.082 45.37 47.778 A 1319.834 1319.834 0 0 0 34.018 64.301 L 33.918 64.501 L 33.818 64.601 L 33.718 64.701 A 1.295 1.295 0 0 1 33.342 64.924 Q 32.999 65.051 32.602 64.95 A 1.863 1.863 0 0 1 32.318 64.851 Q 31.54 64.51 31.613 63.65 A 1.91 1.91 0 0 1 31.618 63.601 Q 31.618 63.501 31.818 63.101 Q 40.218 42.701 46.018 26.501 Q 49.218 17.601 50.618 12.301 Q 51.518 8.801 51.618 7.101 L 51.618 7.001 A 16.886 16.886 0 0 0 50.936 7.594 Q 49.984 8.463 48.618 9.901 Q 45.939 12.58 41.911 17.37 A 286.319 286.319 0 0 0 39.318 20.501 Q 24.718 38.001 2.518 67.801 L 2.418 68.001 L 2.318 68.101 L 2.018 68.401 Q 1.711 68.554 1.521 68.59 A 0.564 0.564 0 0 1 1.418 68.601 Q 0.888 68.689 0.474 68.348 A 1.519 1.519 0 0 1 0.368 68.251 Q -0.082 67.801 0.018 67.201 A 0.526 0.526 0 0 1 0.04 67.059 Q 0.077 66.925 0.181 66.758 A 2.165 2.165 0 0 1 0.218 66.701 A 1373.358 1373.358 0 0 0 8.906 47.28 Q 13.493 36.798 17.318 27.501 Q 22.373 15.31 24.382 9.112 A 80.04 80.04 0 0 0 24.418 9.001 Q 25.078 7.023 25.329 5.724 A 10.733 10.733 0 0 0 25.418 5.201 A 10.051 10.051 0 0 0 24.632 5.954 Q 23.892 6.734 22.981 7.929 A 47.207 47.207 0 0 0 22.118 9.101 A 76.383 76.383 0 0 0 18.978 14.061 Q 17.43 16.712 15.864 19.796 A 140.683 140.683 0 0 0 14.818 21.901 L 14.618 22.201 A 2.384 2.384 0 0 1 14.312 22.431 Q 13.72 22.8 13.186 22.537 A 1.243 1.243 0 0 1 13.118 22.501 A 1.646 1.646 0 0 1 12.771 22.297 Q 12.263 21.899 12.418 21.201 A 3.61 3.61 0 0 0 12.474 21.082 Q 12.558 20.897 12.687 20.578 A 29.077 29.077 0 0 0 12.718 20.501 A 135.915 135.915 0 0 1 15.615 14.945 Q 16.97 12.496 18.271 10.435 A 58.674 58.674 0 0 1 20.818 6.701 A 28.374 28.374 0 0 1 22.016 5.171 Q 23.218 3.749 24.25 3.007 A 6.137 6.137 0 0 1 24.718 2.701 A 3.904 3.904 0 0 1 25.478 2.301 A 2.876 2.876 0 0 1 26.518 2.101 A 1.65 1.65 0 0 1 27.243 2.338 Q 27.574 2.545 27.788 2.927 A 2.306 2.306 0 0 1 27.918 3.201 Q 28.308 4.078 27.842 6.098 A 15.225 15.225 0 0 1 27.818 6.201 Q 27.118 9.101 25.018 14.801 Q 22.418 21.901 17.618 33.301 A 1595.32 1595.32 0 0 1 13.394 43.062 Q 11.218 48.046 8.776 53.563 A 2730.889 2730.889 0 0 1 7.118 57.301 Z M 54.918 66.601 L 55.018 66.601 L 54.918 66.601 Z",
  "M 93.818 25.701 L 93.818 25.801 L 94.018 26.001 A 1.444 1.444 0 0 1 94.127 26.288 Q 94.283 26.896 93.773 27.443 A 2.211 2.211 0 0 1 93.718 27.501 Q 92.9 28.228 92.082 27.55 A 2.37 2.37 0 0 1 91.918 27.401 A 1.819 1.819 0 0 0 90.824 26.813 Q 90.247 26.716 89.485 26.885 A 5.646 5.646 0 0 0 89.418 26.901 Q 86.718 27.601 83.518 30.301 A 25.25 25.25 0 0 0 81.829 31.834 Q 81.027 32.635 80.437 33.403 A 9.918 9.918 0 0 0 79.418 35.001 A 6.41 6.41 0 0 0 79.226 35.419 Q 78.94 36.111 79.018 36.501 L 79.118 36.701 A 1.441 1.441 0 0 0 79.225 36.696 Q 79.397 36.683 79.712 36.634 A 18.563 18.563 0 0 0 79.918 36.601 Q 81.318 36.001 84.118 34.001 A 4.172 4.172 0 0 0 84.355 33.844 Q 84.974 33.41 86.518 32.151 A 58.502 58.502 0 0 1 87.412 31.435 Q 88.316 30.727 88.958 30.295 A 10.671 10.671 0 0 1 89.418 30.001 Q 90.818 29.201 91.618 29.901 Q 92.157 30.53 91.808 31.644 A 4.308 4.308 0 0 1 91.718 31.901 A 10.184 10.184 0 0 1 91.519 32.274 Q 90.981 33.244 89.518 35.601 A 305.678 305.678 0 0 0 87.873 38.278 Q 85.689 41.875 84.768 43.681 A 17.979 17.979 0 0 0 84.418 44.401 Q 84.189 44.783 84.076 45.108 A 2.269 2.269 0 0 0 84.018 45.301 Q 84.618 44.901 85.318 44.401 Q 86.018 43.901 86.918 43.251 A 22.557 22.557 0 0 0 87.337 42.941 Q 87.776 42.608 88.055 42.356 A 4.633 4.633 0 0 0 88.218 42.201 A 8147.414 8147.414 0 0 1 91.041 40.185 Q 95.099 37.289 96.918 36.001 A 0.731 0.731 0 0 1 96.999 35.932 Q 97.043 35.899 97.098 35.866 A 1.826 1.826 0 0 1 97.218 35.801 A 1.258 1.258 0 0 1 97.618 35.734 Q 98.018 35.734 98.418 36.001 A 1.472 1.472 0 0 1 98.678 36.217 Q 98.989 36.549 98.92 36.989 A 1.114 1.114 0 0 1 98.918 37.001 A 0.977 0.977 0 0 1 98.802 37.445 Q 98.595 37.852 98.018 38.301 A 2400.284 2400.284 0 0 0 94.906 40.507 Q 90.443 43.676 87.218 46.001 A 32.992 32.992 0 0 1 86.202 46.802 Q 84.78 47.875 83.955 48.187 A 3.013 3.013 0 0 1 83.918 48.201 Q 82.812 48.643 82.086 48.27 A 1.614 1.614 0 0 1 81.618 47.901 A 1.554 1.554 0 0 1 81.198 47.092 Q 80.988 46.062 81.752 44.284 A 14.229 14.229 0 0 1 82.018 43.701 Q 83.118 41.301 86.918 35.101 L 86.918 35.001 A 57.633 57.633 0 0 1 85.221 36.28 Q 83.661 37.408 82.495 38.052 A 12.338 12.338 0 0 1 81.818 38.401 Q 79.71 39.501 78.274 39.088 A 2.679 2.679 0 0 1 78.018 39.001 Q 76.363 38.222 76.509 36.115 A 5.377 5.377 0 0 1 76.518 36.001 A 5.535 5.535 0 0 1 76.959 34.342 Q 77.551 32.949 78.909 31.356 A 20.353 20.353 0 0 1 79.218 31.001 A 23.122 23.122 0 0 1 82.997 27.416 A 18.702 18.702 0 0 1 86.818 25.201 A 12.128 12.128 0 0 1 88.262 24.652 Q 89.021 24.421 89.712 24.342 A 6.195 6.195 0 0 1 90.418 24.301 L 90.518 24.301 A 5.058 5.058 0 0 1 91.966 24.497 A 3.831 3.831 0 0 1 93.818 25.701 Z",
  "M 92.218 45.401 L 99.418 29.401 L 99.518 29.201 A 1.078 1.078 0 0 1 100.255 28.674 A 1.403 1.403 0 0 1 100.418 28.651 A 2.025 2.025 0 0 1 100.575 28.644 Q 101.072 28.641 101.418 28.901 A 1.32 1.32 0 0 1 101.714 29.24 Q 101.923 29.593 101.849 30.053 A 1.783 1.783 0 0 1 101.818 30.201 A 0.451 0.451 0 0 0 101.767 30.262 Q 101.718 30.331 101.718 30.401 L 98.118 38.201 A 0.712 0.712 0 0 0 98.265 38.1 Q 98.39 37.992 98.514 37.807 A 2.322 2.322 0 0 0 98.518 37.801 A 219.299 219.299 0 0 1 100.699 35.369 Q 103.068 32.771 104.81 31.063 A 48.981 48.981 0 0 1 105.818 30.101 Q 108.123 27.98 109.408 27.815 A 1.646 1.646 0 0 1 109.618 27.801 L 109.718 27.801 A 1.957 1.957 0 0 1 110.425 27.921 Q 111.14 28.195 111.418 29.101 A 1.982 1.982 0 0 1 111.495 29.434 Q 111.626 30.309 111.276 32.026 A 21.538 21.538 0 0 1 111.218 32.301 A 38.564 38.564 0 0 0 110.965 33.332 Q 110.539 35.185 110.618 35.901 A 1.568 1.568 0 0 0 110.642 36.19 Q 110.739 36.701 111.218 36.701 A 1.434 1.434 0 0 0 111.468 36.732 Q 112.201 36.764 113.402 36.172 A 11.904 11.904 0 0 0 113.918 35.901 Q 115.118 35.301 116.218 34.501 L 116.318 34.401 A 0.323 0.323 0 0 1 116.394 34.346 Q 116.475 34.303 116.61 34.272 A 1.869 1.869 0 0 1 116.718 34.251 A 4.666 4.666 0 0 1 116.913 34.222 Q 117 34.211 117.076 34.206 A 2.029 2.029 0 0 1 117.218 34.201 A 1.253 1.253 0 0 1 117.77 34.514 Q 117.966 34.709 118.072 35.003 A 1.784 1.784 0 0 1 118.118 35.151 A 1.735 1.735 0 0 1 118.164 35.385 Q 118.238 35.981 117.818 36.401 Q 117.718 36.501 117.318 36.701 A 18.589 18.589 0 0 1 115.561 37.864 Q 114.667 38.38 113.836 38.697 A 8.014 8.014 0 0 1 112.418 39.101 A 5.614 5.614 0 0 1 111.783 39.215 Q 110.818 39.33 110.057 39.036 A 2.961 2.961 0 0 1 109.068 38.401 Q 107.96 37.337 108.149 35.095 A 9.466 9.466 0 0 1 108.218 34.501 Q 108.295 33.965 108.489 33.077 A 50.015 50.015 0 0 1 108.618 32.501 Q 108.865 31.432 108.976 30.903 A 19.744 19.744 0 0 0 109.018 30.701 A 10.849 10.849 0 0 0 108.137 31.366 Q 107.229 32.117 106.022 33.341 A 61.471 61.471 0 0 0 104.818 34.601 Q 101.724 37.901 97.969 42.335 A 343.074 343.074 0 0 0 94.418 46.601 Q 94.177 46.842 93.935 46.954 A 1.123 1.123 0 0 1 93.818 47.001 A 1.223 1.223 0 0 1 93.485 47.084 Q 93.152 47.117 92.818 46.951 Q 92.318 46.701 92.118 46.201 L 92.118 45.601 A 0.451 0.451 0 0 0 92.17 45.54 Q 92.218 45.47 92.218 45.401 Z",
  "M 93.418 8.801 L 130.718 8.701 Q 132.418 5.301 134.118 2.101 A 1.844 1.844 0 0 1 134.181 1.985 Q 134.215 1.928 134.248 1.883 A 0.734 0.734 0 0 1 134.318 1.801 Q 134.618 1.501 135.218 1.401 L 135.318 1.401 L 135.518 1.501 A 1.896 1.896 0 0 1 135.764 1.579 Q 135.887 1.628 135.982 1.691 A 0.857 0.857 0 0 1 136.118 1.801 Q 136.556 2.151 136.457 2.73 A 1.588 1.588 0 0 1 136.418 2.901 A 0.455 0.455 0 0 1 136.402 3.007 Q 136.338 3.259 136.029 3.88 A 17.74 17.74 0 0 1 136.018 3.901 A 4086.398 4086.398 0 0 1 134.124 7.538 A 3605.793 3605.793 0 0 1 133.518 8.701 L 152.818 8.601 Q 152.952 8.601 153.041 8.645 A 0.296 0.296 0 0 1 153.118 8.701 A 1.896 1.896 0 0 1 153.364 8.779 Q 153.487 8.828 153.582 8.891 A 0.857 0.857 0 0 1 153.718 9.001 Q 154.541 9.823 153.86 10.646 A 2.238 2.238 0 0 1 153.718 10.801 Q 153.432 10.992 152.871 11.092 A 4.853 4.853 0 0 1 152.818 11.101 L 132.218 11.201 A 1130.008 1130.008 0 0 0 125.331 25.016 A 1035.099 1035.099 0 0 0 125.118 25.451 Q 121.718 32.401 118.618 39.201 A 306.598 306.598 0 0 0 116.574 43.801 Q 114.407 48.796 113.063 52.473 A 79.212 79.212 0 0 0 112.318 54.601 A 53.183 53.183 0 0 0 111.699 56.419 Q 110.893 58.951 110.818 60.301 L 110.818 60.801 A 5.676 5.676 0 0 0 111.695 60.427 A 5.058 5.058 0 0 0 111.918 60.301 A 13.552 13.552 0 0 0 113.203 59.412 Q 114.535 58.385 116.228 56.702 A 59.813 59.813 0 0 0 117.018 55.901 Q 119.571 53.28 122.756 49.351 A 187.018 187.018 0 0 0 126.018 45.201 A 193.822 193.822 0 0 0 130.706 39.107 A 158.517 158.517 0 0 0 133.218 35.601 A 1.844 1.844 0 0 1 133.281 35.485 Q 133.315 35.428 133.348 35.383 A 0.734 0.734 0 0 1 133.418 35.301 Q 133.918 34.901 134.518 35.051 A 1.524 1.524 0 0 1 135.022 35.273 A 1.37 1.37 0 0 1 135.418 35.701 Q 135.606 36.169 135.442 36.638 A 1.523 1.523 0 0 1 135.418 36.701 A 2.119 2.119 0 0 1 135.36 36.807 Q 135.261 36.979 135.055 37.294 A 30.775 30.775 0 0 1 134.918 37.501 Q 128.796 46.117 123.587 52.335 A 134.955 134.955 0 0 1 120.318 56.101 Q 116.418 60.301 113.818 62.001 A 10.921 10.921 0 0 1 112.768 62.652 Q 111.476 63.348 110.441 63.348 A 2.831 2.831 0 0 1 109.918 63.301 Q 108.899 63.046 108.529 62.071 A 2.846 2.846 0 0 1 108.418 61.701 A 3.517 3.517 0 0 1 108.337 61.239 Q 108.239 60.354 108.447 58.971 A 20.549 20.549 0 0 1 108.618 58.001 Q 109.518 54.401 112.318 47.501 A 259.69 259.69 0 0 1 115.498 40.13 Q 118.91 32.515 123.858 22.458 A 892.59 892.59 0 0 1 125.518 19.101 Q 127.518 14.901 129.418 11.201 L 93.418 11.301 Q 93.018 11.301 92.818 11.201 A 1.218 1.218 0 0 1 92.259 10.445 A 1.748 1.748 0 0 1 92.218 10.251 A 1.717 1.717 0 0 1 92.2 10.077 Q 92.186 9.8 92.273 9.573 A 1.064 1.064 0 0 1 92.518 9.201 Q 92.818 8.901 93.418 8.801 Z",
  "M 137.218 29.401 L 137.618 29.601 A 1.8 1.8 0 0 1 137.947 29.808 Q 138.542 30.29 138.218 31.101 A 0.193 0.193 0 0 1 138.208 31.156 Q 138.181 31.243 138.082 31.402 A 3.801 3.801 0 0 1 138.018 31.501 A 177.436 177.436 0 0 0 136.079 35.434 Q 134.149 39.482 133.118 42.301 A 66.967 66.967 0 0 0 132.931 42.969 Q 132.705 43.791 132.563 44.405 A 21.436 21.436 0 0 0 132.518 44.601 Q 134.318 43.701 138.118 41.001 Q 141.718 38.301 145.718 35.001 A 2.221 2.221 0 0 1 145.935 34.856 Q 146.178 34.715 146.379 34.702 A 0.621 0.621 0 0 1 146.418 34.701 A 1.323 1.323 0 0 1 147.287 35.024 A 1.688 1.688 0 0 1 147.318 35.051 A 1.36 1.36 0 0 1 147.634 35.445 A 1.244 1.244 0 0 1 147.768 35.901 A 1.104 1.104 0 0 1 147.774 36.011 Q 147.774 36.445 147.418 36.801 L 147.318 36.901 A 165.481 165.481 0 0 1 143.2 40.261 Q 141.335 41.729 139.665 42.939 A 70.469 70.469 0 0 1 136.518 45.101 Q 133.618 47.001 132.218 47.301 A 3.01 3.01 0 0 1 131.913 47.361 Q 130.833 47.515 130.33 46.673 A 2.395 2.395 0 0 1 130.118 46.201 Q 129.719 45.201 130.317 43.104 A 20.524 20.524 0 0 1 130.318 43.101 A 24.849 24.849 0 0 1 130.823 41.528 Q 131.425 39.828 132.45 37.491 A 112.133 112.133 0 0 1 133.118 36.001 Q 134.418 33.001 135.918 30.201 A 1.544 1.544 0 0 1 136.261 29.737 Q 136.57 29.458 137.024 29.411 A 1.851 1.851 0 0 1 137.218 29.401 Z M 142.818 23.301 L 138.218 26.501 A 1.821 1.821 0 0 1 137.946 26.652 Q 137.241 26.964 136.667 26.355 A 2.014 2.014 0 0 1 136.618 26.301 A 1.238 1.238 0 0 1 136.359 25.932 Q 136.263 25.717 136.263 25.471 A 1.329 1.329 0 0 1 136.268 25.351 A 1.039 1.039 0 0 1 136.686 24.59 A 1.395 1.395 0 0 1 136.818 24.501 L 136.818 24.401 L 141.318 21.201 Q 141.401 21.201 141.484 21.132 A 0.497 0.497 0 0 0 141.518 21.101 A 0.963 0.963 0 0 1 141.743 21.02 A 0.817 0.817 0 0 1 141.918 21.001 L 142.118 21.001 Q 142.718 21.001 143.118 21.651 A 1.482 1.482 0 0 1 143.251 21.923 Q 143.434 22.427 143.118 22.901 Q 143.118 23.001 142.918 23.201 L 142.818 23.301 Z",
  "M 153.318 26.201 L 146.518 39.101 A 203.931 203.931 0 0 1 149.799 35.888 Q 154.468 31.426 157.618 29.101 A 35.462 35.462 0 0 1 158.799 28.238 Q 160.468 27.076 161.518 26.701 Q 162.418 26.401 163.318 26.701 Q 164.218 27.001 164.518 28.001 A 2.309 2.309 0 0 1 164.589 28.405 Q 164.674 29.371 164.123 30.917 A 14.136 14.136 0 0 1 164.018 31.201 A 22.649 22.649 0 0 1 163.537 32.388 Q 162.812 34.057 161.518 36.501 A 187.764 187.764 0 0 0 160.705 38.053 Q 159.69 40.014 159.221 41.065 A 17.54 17.54 0 0 0 159.118 41.301 L 158.718 42.301 A 14.859 14.859 0 0 0 160.267 41.628 Q 161.921 40.808 164.121 39.352 A 69.58 69.58 0 0 0 165.518 38.401 A 65.676 65.676 0 0 0 169.664 35.524 A 59.587 59.587 0 0 0 170.218 35.101 A 0.731 0.731 0 0 1 170.299 35.032 Q 170.387 34.966 170.518 34.901 Q 170.896 34.749 171.303 34.884 A 1.615 1.615 0 0 1 171.568 35.001 A 1.319 1.319 0 0 1 171.963 35.32 A 1.211 1.211 0 0 1 172.218 35.901 A 1.005 1.005 0 0 1 172.238 36.082 Q 172.243 36.372 172.066 36.626 A 1.296 1.296 0 0 1 171.918 36.801 A 0.508 0.508 0 0 1 171.849 36.898 Q 171.659 37.119 171.039 37.585 A 19.522 19.522 0 0 1 171.018 37.601 A 100.754 100.754 0 0 1 167.631 40.054 Q 164.334 42.332 161.778 43.622 A 28.666 28.666 0 0 1 161.418 43.801 A 24.266 24.266 0 0 1 160.424 44.294 Q 159.018 44.951 158.118 45.101 Q 156.786 45.267 156.286 44.255 A 2.447 2.447 0 0 1 156.118 43.801 A 1.927 1.927 0 0 1 156.048 43.434 Q 155.962 42.556 156.513 41.158 A 12.005 12.005 0 0 1 156.618 40.901 Q 157.318 39.101 159.118 35.651 A 117.265 117.265 0 0 0 159.949 34.029 Q 161.093 31.751 161.618 30.401 A 9.116 9.116 0 0 0 161.808 29.923 Q 161.89 29.697 161.946 29.497 A 4.007 4.007 0 0 0 162.018 29.201 Q 160.948 29.66 159.175 30.996 A 44.045 44.045 0 0 0 158.018 31.901 A 94.828 94.828 0 0 0 154.29 35.149 Q 150.325 38.772 145.146 44.108 A 366.979 366.979 0 0 0 143.418 45.901 A 26.74 26.74 0 0 1 142.912 46.475 Q 142.678 46.733 142.461 46.956 A 15.055 15.055 0 0 1 142.318 47.101 A 0.731 0.731 0 0 1 142.238 47.169 Q 142.194 47.202 142.139 47.235 A 1.826 1.826 0 0 1 142.018 47.301 A 0.963 0.963 0 0 1 141.672 47.481 Q 141.318 47.579 140.885 47.383 A 2.01 2.01 0 0 1 140.818 47.351 A 1.513 1.513 0 0 1 140.457 47.105 A 1.055 1.055 0 0 1 140.118 46.301 A 1.19 1.19 0 0 1 140.126 46.172 Q 140.14 46.046 140.178 45.87 A 5.828 5.828 0 0 1 140.218 45.701 L 151.018 25.101 A 2.634 2.634 0 0 1 151.256 24.839 Q 151.537 24.571 151.818 24.501 A 0.746 0.746 0 0 1 151.963 24.448 Q 152.143 24.401 152.418 24.401 Q 152.679 24.531 152.854 24.661 A 1.468 1.468 0 0 1 153.018 24.801 Q 153.497 25.184 153.425 25.843 A 1.753 1.753 0 0 1 153.418 25.901 L 153.318 26.201 Z",
  "M 236.218 11.101 L 236.218 11.401 A 1.688 1.688 0 0 1 235.968 11.89 Q 235.662 12.294 235.122 12.386 A 1.814 1.814 0 0 1 235.018 12.401 A 1.399 1.399 0 0 1 234.86 12.414 Q 234.365 12.428 234.037 12.056 A 1.45 1.45 0 0 1 233.918 11.901 A 1.193 1.193 0 0 1 233.725 11.341 A 1.5 1.5 0 0 1 233.718 11.201 Q 233.318 6.801 229.918 4.501 A 13.977 13.977 0 0 0 222.604 2.449 A 14.863 14.863 0 0 0 222.418 2.451 Q 218.418 2.501 214.918 4.301 A 13.73 13.73 0 0 0 211.887 6.369 A 10.517 10.517 0 0 0 209.118 10.401 A 10.228 10.228 0 0 0 208.381 14.271 Q 208.381 17.505 210.218 21.301 A 20.676 20.676 0 0 0 210.716 22.232 A 26.455 26.455 0 0 0 211.168 23.001 Q 211.718 23.901 212.368 24.951 Q 213.018 26.001 213.318 26.601 A 65.638 65.638 0 0 1 216.981 33.732 Q 219.187 38.81 220.018 43.501 A 29.72 29.72 0 0 1 220.416 47.019 Q 220.594 50.506 219.845 53.596 A 19.991 19.991 0 0 1 219.418 55.101 Q 217.718 60.301 213.418 64.101 A 28.202 28.202 0 0 1 209.364 66.991 A 35.29 35.29 0 0 1 206.518 68.501 A 26.858 26.858 0 0 1 203.866 69.59 Q 200.474 70.763 197.928 70.402 A 8.188 8.188 0 0 1 197.918 70.401 Q 196.318 70.201 195.018 69.251 A 5.414 5.414 0 0 1 193.166 66.825 A 6.529 6.529 0 0 1 193.118 66.701 A 7.403 7.403 0 0 1 192.744 64.845 Q 192.59 62.832 193.356 60.304 A 20.419 20.419 0 0 1 193.618 59.501 A 24.494 24.494 0 0 1 196.124 54.511 Q 197.955 51.67 200.718 48.801 A 52.763 52.763 0 0 1 208.792 42.082 A 60.246 60.246 0 0 1 210.918 40.701 Q 211.052 40.567 211.186 40.523 A 0.419 0.419 0 0 1 211.318 40.501 A 1.094 1.094 0 0 1 211.584 40.446 Q 212.041 40.412 212.468 40.801 A 1.527 1.527 0 0 1 212.768 41.166 Q 212.982 41.537 212.919 41.994 A 1.643 1.643 0 0 1 212.918 42.001 A 0.827 0.827 0 0 1 212.779 42.306 Q 212.521 42.679 211.818 43.101 Q 204.518 47.701 200.018 53.401 Q 197.198 56.944 196.051 60.174 A 13.956 13.956 0 0 0 195.418 62.601 A 10.686 10.686 0 0 0 195.295 63.385 Q 195.042 65.544 195.915 66.745 A 2.972 2.972 0 0 0 196.218 67.101 A 3.176 3.176 0 0 0 197.492 67.803 Q 198.397 68.071 199.642 67.976 A 10.404 10.404 0 0 0 200.318 67.901 A 15.572 15.572 0 0 0 203.023 67.23 Q 205.406 66.426 208.218 64.801 Q 212.118 62.401 214.718 58.801 Q 217.318 55.201 217.818 50.801 A 21.621 21.621 0 0 0 217.952 48.378 Q 217.952 43.137 215.565 36.901 A 51.189 51.189 0 0 0 214.618 34.601 A 56.481 56.481 0 0 0 212.121 29.56 A 73.567 73.567 0 0 0 209.618 25.401 A 30.084 30.084 0 0 1 207.483 21.374 Q 205.376 16.482 206.018 12.201 Q 206.718 7.701 210.218 4.501 A 16.942 16.942 0 0 1 220.631 0.071 A 22.313 22.313 0 0 1 222.418 0.001 L 222.618 0.001 A 18.051 18.051 0 0 1 227.015 0.506 A 12.371 12.371 0 0 1 233.118 4.001 A 11.055 11.055 0 0 1 236.025 9.73 A 14.317 14.317 0 0 1 236.218 11.101 Z",
  "M 238.218 29.401 L 238.618 29.601 A 1.8 1.8 0 0 1 238.947 29.808 Q 239.542 30.29 239.218 31.101 A 0.193 0.193 0 0 1 239.208 31.156 Q 239.181 31.243 239.082 31.402 A 3.801 3.801 0 0 1 239.018 31.501 A 177.436 177.436 0 0 0 237.079 35.434 Q 235.149 39.482 234.118 42.301 A 66.967 66.967 0 0 0 233.931 42.969 Q 233.705 43.791 233.563 44.405 A 21.436 21.436 0 0 0 233.518 44.601 Q 235.318 43.701 239.118 41.001 Q 242.718 38.301 246.718 35.001 A 2.221 2.221 0 0 1 246.935 34.856 Q 247.178 34.715 247.379 34.702 A 0.621 0.621 0 0 1 247.418 34.701 A 1.323 1.323 0 0 1 248.287 35.024 A 1.688 1.688 0 0 1 248.318 35.051 A 1.36 1.36 0 0 1 248.634 35.445 A 1.244 1.244 0 0 1 248.768 35.901 A 1.104 1.104 0 0 1 248.774 36.011 Q 248.774 36.445 248.418 36.801 L 248.318 36.901 A 165.481 165.481 0 0 1 244.2 40.261 Q 242.335 41.729 240.665 42.939 A 70.469 70.469 0 0 1 237.518 45.101 Q 234.618 47.001 233.218 47.301 A 3.01 3.01 0 0 1 232.913 47.361 Q 231.833 47.515 231.33 46.673 A 2.395 2.395 0 0 1 231.118 46.201 Q 230.719 45.201 231.317 43.104 A 20.524 20.524 0 0 1 231.318 43.101 A 24.849 24.849 0 0 1 231.823 41.528 Q 232.425 39.828 233.45 37.491 A 112.133 112.133 0 0 1 234.118 36.001 Q 235.418 33.001 236.918 30.201 A 1.544 1.544 0 0 1 237.261 29.737 Q 237.57 29.458 238.024 29.411 A 1.851 1.851 0 0 1 238.218 29.401 Z M 243.818 23.301 L 239.218 26.501 A 1.821 1.821 0 0 1 238.946 26.652 Q 238.241 26.964 237.667 26.355 A 2.014 2.014 0 0 1 237.618 26.301 A 1.238 1.238 0 0 1 237.359 25.932 Q 237.263 25.717 237.263 25.471 A 1.329 1.329 0 0 1 237.268 25.351 A 1.039 1.039 0 0 1 237.686 24.59 A 1.395 1.395 0 0 1 237.818 24.501 L 237.818 24.401 L 242.318 21.201 Q 242.401 21.201 242.484 21.132 A 0.497 0.497 0 0 0 242.518 21.101 A 0.963 0.963 0 0 1 242.743 21.02 A 0.817 0.817 0 0 1 242.918 21.001 L 243.118 21.001 Q 243.718 21.001 244.118 21.651 A 1.482 1.482 0 0 1 244.251 21.923 Q 244.434 22.427 244.118 22.901 Q 244.118 23.001 243.918 23.201 L 243.818 23.301 Z",
  "M 224.018 8.801 L 261.318 8.701 Q 263.018 5.301 264.718 2.101 A 1.844 1.844 0 0 1 264.781 1.985 Q 264.815 1.928 264.848 1.883 A 0.734 0.734 0 0 1 264.918 1.801 Q 265.218 1.501 265.818 1.401 L 265.918 1.401 L 266.118 1.501 A 1.896 1.896 0 0 1 266.364 1.579 Q 266.487 1.628 266.582 1.691 A 0.857 0.857 0 0 1 266.718 1.801 Q 267.156 2.151 267.057 2.73 A 1.588 1.588 0 0 1 267.018 2.901 A 0.455 0.455 0 0 1 267.002 3.007 Q 266.938 3.259 266.629 3.88 A 17.74 17.74 0 0 1 266.618 3.901 A 4086.398 4086.398 0 0 1 264.724 7.538 A 3605.793 3605.793 0 0 1 264.118 8.701 L 283.418 8.601 Q 283.552 8.601 283.641 8.645 A 0.296 0.296 0 0 1 283.718 8.701 A 1.896 1.896 0 0 1 283.964 8.779 Q 284.087 8.828 284.182 8.891 A 0.857 0.857 0 0 1 284.318 9.001 Q 285.141 9.823 284.46 10.646 A 2.238 2.238 0 0 1 284.318 10.801 Q 284.032 10.992 283.471 11.092 A 4.853 4.853 0 0 1 283.418 11.101 L 262.818 11.201 A 1130.008 1130.008 0 0 0 255.931 25.016 A 1035.099 1035.099 0 0 0 255.718 25.451 Q 252.318 32.401 249.218 39.201 A 306.598 306.598 0 0 0 247.174 43.801 Q 245.007 48.796 243.663 52.473 A 79.212 79.212 0 0 0 242.918 54.601 A 53.183 53.183 0 0 0 242.299 56.419 Q 241.493 58.951 241.418 60.301 L 241.418 60.801 A 5.676 5.676 0 0 0 242.295 60.427 A 5.058 5.058 0 0 0 242.518 60.301 A 13.552 13.552 0 0 0 243.803 59.412 Q 245.135 58.385 246.828 56.702 A 59.813 59.813 0 0 0 247.618 55.901 Q 250.171 53.28 253.356 49.351 A 187.018 187.018 0 0 0 256.618 45.201 A 193.822 193.822 0 0 0 261.306 39.107 A 158.517 158.517 0 0 0 263.818 35.601 A 1.844 1.844 0 0 1 263.881 35.485 Q 263.915 35.428 263.948 35.383 A 0.734 0.734 0 0 1 264.018 35.301 Q 264.518 34.901 265.118 35.051 A 1.524 1.524 0 0 1 265.622 35.273 A 1.37 1.37 0 0 1 266.018 35.701 Q 266.206 36.169 266.042 36.638 A 1.523 1.523 0 0 1 266.018 36.701 A 2.119 2.119 0 0 1 265.96 36.807 Q 265.861 36.979 265.655 37.294 A 30.775 30.775 0 0 1 265.518 37.501 Q 259.396 46.117 254.187 52.335 A 134.955 134.955 0 0 1 250.918 56.101 Q 247.018 60.301 244.418 62.001 A 10.921 10.921 0 0 1 243.368 62.652 Q 242.076 63.348 241.041 63.348 A 2.831 2.831 0 0 1 240.518 63.301 Q 239.499 63.046 239.129 62.071 A 2.846 2.846 0 0 1 239.018 61.701 A 3.517 3.517 0 0 1 238.937 61.239 Q 238.839 60.354 239.047 58.971 A 20.549 20.549 0 0 1 239.218 58.001 Q 240.118 54.401 242.918 47.501 A 259.69 259.69 0 0 1 246.098 40.13 Q 249.51 32.515 254.458 22.458 A 892.59 892.59 0 0 1 256.118 19.101 Q 258.118 14.901 260.018 11.201 L 224.018 11.301 Q 223.618 11.301 223.418 11.201 A 1.218 1.218 0 0 1 222.859 10.445 A 1.748 1.748 0 0 1 222.818 10.251 A 1.717 1.717 0 0 1 222.8 10.077 Q 222.786 9.8 222.873 9.573 A 1.064 1.064 0 0 1 223.118 9.201 Q 223.418 8.901 224.018 8.801 Z"
].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: i * 0.25 - 0.25
                },
                opacity: {
                  duration: 0,
                  delay: i * 0.25
                }
              }}
            />
          ))}
        </g>
      </motion.svg>
      <motion.button 
        onClick={() => setKey(k => k + 1)}
        className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <RotateCcw size={16} />
      </motion.button>
    </div>
  )
}