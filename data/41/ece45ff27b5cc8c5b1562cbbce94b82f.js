callback({
  "levelNumber": 41,
  "size": 69,
  "steps": 1103,
  "successRatio": 0.46,
  "type": "mergesort",
  "author": "IAmWave",
  "hash": "ece45ff27b5cc8c5b1562cbbce94b82f",
  "path": "41-Sorting-Floor-34.714/69.1534.mergesort-IAmWave.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 41-Sorting-Floor - SIZE 69/34 - SPEED 1534/714 --\n\n-- This is merge sort. In HRM it is extremely impractical, but cool nonetheless.\n-- It uses a non-recursive approach, first sorting groups of size 2, then 4, 8 \n-- and so on. Because the merging is done naively and in-place, the algorithm\n-- actually runs in O(n^2 log n), which is worse than the simple sorts. Memory\n-- constraints make it difficult to have an auxiliary array to do merging in.\n-- VARIABLES --\n-- n is the number of elements, size is the current group size, but divided by\n-- two - merging into groups of two means size = 1.\n-- i and j represent the indices in the first and second group, respectively.\n-- to is the last element of the group that is being merged.\n-- The variables t, k and cur are helper variables used in merging.\n\na:\n    COPYFROM 24\n    COPYTO   21\nb:\n    INBOX   \n    JUMPZ    c\n    COPYTO   [21]\n    BUMPUP   21\n    JUMP     b\nc:\n    COPYFROM 24\n    COPYTO   20\n    BUMPUP   20\n    COMMENT  4\nd:\n    COPYFROM 24\n    COPYTO   16\n    COPYFROM 21\n    SUB      20\n    JUMPN    n\n    COMMENT  0\ne:\nf:\ng:\n    COPYFROM 16\n    SUB      21\n    COMMENT  7\n    JUMPZ    m\n    COPYFROM 16\n    COPYTO   22\n    ADD      20\n    COPYTO   23\n    ADD      20\n    COPYTO   16\n    SUB      21\n    JUMPN    h\n    COMMENT  3\n    COPYFROM 21\n    COPYTO   16\nh:\ni:\n    COMMENT  2\n    COPYFROM 22\n    SUB      23\n    JUMPZ    e\n    COPYFROM 16\n    SUB      23\n    COMMENT  5\n    JUMPZ    f\n    JUMPN    g\n    COPYFROM [22]\n    SUB      [23]\n    JUMPN    l\n    COMMENT  1\n    COPYFROM [23]\n    COPYTO   17\n    COPYFROM 23\n    COPYTO   18\nj:\n    BUMPDN   18\n    COPYFROM [18]\n    COPYTO   19\n    BUMPUP   18\n    COPYFROM 19\n    COPYTO   [18]\n    BUMPDN   18\n    SUB      22\n    JUMPZ    k\n    JUMP     j\nk:\n    COPYFROM 17\n    COPYTO   [22]\n    BUMPUP   23\nl:\n    BUMPUP   22\n    JUMP     i\nm:\n    COPYFROM 20\n    ADD      20\n    COPYTO   20\n    JUMP     d\n    COMMENT  6\nn:\n    COPYFROM 24\n    COPYTO   22\no:\n    COPYFROM [22]\n    OUTBOX  \n    BUMPUP   22\n    SUB      21\n    JUMPN    o\n    JUMP     a\n\n\nDEFINE COMMENT 0\neJxLZGBgmCQW2cIkaVRQK7MtPVChIvmA0vTUt2r9Zas0ZnT8UG+c8UiVd9FkucqVKjJZK3ilrJdaiolM\nvCoS2QLUynDISGbxT/3MVnf9J1kQvnRDifH88ps2y9JCHJwKBZ3+1Mo4G0+Wcf67ACQv693RLhy0vLMp\nZEbHzDCv5iXh88u9w40KmkK4YzgCuWM0faansnuuq2D33N4l5NU447bP2/kcgdZLHcKsl4L05xfdm1dQ\n5b0sqkFkYlTD095JtXeroyr6y64Uzy/fW/gkK7/oTeTy8nkh4lVrQ0HqeTvPhkd3eCZEd5ytSuvc3pXW\neW4uRNxA60Bnnl5a51xDpo65ht/b4nUD2g20QHLu8/4usJl7b17nlL8L3k5VnvRz2te+jJnSDY/n/I4C\nyddNvhPxc15fMIjNuuJs1Ye16yoaNzsVHtm4LG3Hht9RT9cE+N9cbeh7eGWA/5rle8MWLtOK+7WsofT9\nUuVJHsvOzf217O8CmVUyi49s3D/n1ubC6QyjYBQMIAAAqOKmow;\n\nDEFINE COMMENT 1\neJyTZ2BguBD87pBwkMhE4aB9lUeDrmbmBDn6OYRdcdOKueJmGvvZwyd+b5hPfHuKY1x/GVA5Q1Jk0rS/\n4UFT1wc0zgDxuTLvH+TK9F62J7NwOoivmG3VBKIjC3xOMlbsWOtSZzwZxK8qTprWVrJ/jnjVsw0uddmn\nGUbBKBgFAw4ALlwt3w;\n\nDEFINE COMMENT 2\neJxrZGBgYJJsKL0qUlDCKHi3ei5/Rdtc/ms9PEJJ02pEFsxqF10wK0AiadoWya99WyRndOyXqmjbL+Vz\nkldqx4V54sl32kUn3VcWmXSfRyjktgt/11mgcQwqKsqTDijtq5RUdioE8YuUeerPaAcWTdVrKAXx4ywb\nSrttC0oW2d+tXmRv1TTN7lh3qbXxZAEr5ykLzZ2n2JqJTLQ16y8DqQ31EM5L8PxTm+ApMnF9AMuExMBr\nPYmB88uFg4wKQPIV0U6Fx6LWVRyLkj0mEnXiokjUwUcg8f7YL9lL459k7U40Kjie9KeWM3FGx8Vo5Ukg\nufaWq5ntNYFF1dUFJQVVZ6sKqjradWtYJjA2OE950/q1b17b8k7XtojE6I50e6YOAy2QHuYJVk0xExpK\niyddzaybvC2dZcbVzOJZwnk3ZheUdM15W1M/O7P157SnvXWTr/UUT9reVTypox2k7/1SkYlnFz3JArG7\nlzSUHl7JnPt0jVHB73UFJfEbrJrYNizvBMkJ7VxX8XFvf5nwQadCjgPL0kz2WMZf2KUVt3OHZ0Lo9idZ\n67bz1AvtzGzV3D2j49mep71h+1kmlB962gvSu/Qcl6XvNUGNjdcVNU/czNMzv6NpPeeuo9+923cizK8s\nS7t0iTn30iWjgmXX9lXuvbGv8utdSDzcvdw44+WVCTMZRsGIBgALK9z9;\n\nDEFINE COMMENT 3\neJzzZmBgOK2ssnWyXNPuNCnn7Q9EeRddFQmaelXkaa+LOE89r9TZKgnp/jIrOaOCrYrCeSoqBSWdqmer\npqjdrQZqZfipL7plqp7ypKl6BSUL9Llj3PUNtEDiZc4NpaXW0g1xlpmtv8y/9q2x2D/nsFXU8m7bHWt/\n2z/bcN75+Do7t/WzPd29mj+4STd8cFveGerBu2in57MNst6sm0FmyAXvWMsR+HfB+oDEYhA/JyiztSmk\nobQvNLH4b3hgkUjU/PLmmMzW5hjrpaaxx9eZxhZOF01KLDZLPVsVkbG8c09m0NQ9mZ2rQHonluq9elU6\n89z9kuSdFqWF09tKlPNB4m0lRzN4Krelt9d8yT7V9CTranNgkV5LZMvV5mPdp5qUJ1VX8y7iqbReurmC\ndxHDKBgFwxAAAFZ1fHA;\n\nDEFINE COMMENT 4\neJyTY2BgSK3sXPW1LGvF/RKZxU55x7pFs7yaLyXvq/wUJpzHEehUeNtnXYWQl3ZjqMfXPnbPpGnZXvvn\n5ATtWNsUcn19RfTxdaJJlStTCrd3iVdJN5xqml9+uquh1Kp3XQXzhI52vonKk/gm6ixhntC5iqkjeEdN\nc/JOpepvGxlGwSgYBYMCAADEjjZ0;\n\nDEFINE COMMENT 5\neJwLY2BgCLYQzltovq7Cw/zevMemNid+6ledmaqne1xVR2VrnU7nKqASBlbLvmAQrRmSNM0hzKppZphT\nIYjvGLevsjmmv4wjsqE0J2hf5R//tzUg8eRMo4KXucJ5X/KcCmfnzeiYkCsyUSfHeYpv+oSZ/amF07VT\nRCY6pinng9Tuq1xXUV2dWLyi3qjgVJPx5FNNSdP2N06YqVvzdr5S9bm5jBXXepaXR7ZEVZytAqk/u+jc\nXOlFMzqkF80LqV+8xxgk1r3kambWyvaU0lXTU+3Wvq15uiayRWYVy4SFy4KmguQ/bl0wa8ZWkYnrtjPn\ngvjrtjv6gWizM4FF8qe+ZMsdOluVc9CqqfxQ0NS+I40zlhxLmlZx6mtf/5mO9qXn9lX+O/cl2/Hs175Z\nZ/mOtpyOPnXxlMutYyeL7+46wPdi/X6+FzP2XnisubvrrMke3eNh+98dYhgFo2CIAACt4psh;\n\nDEFINE COMMENT 6\neJzTYmBgEHSSbpBxfltj57auIturofSZb39ZYiBPfU7Q096coAkzOQI7Vy32v77+vLfK1uluolvKnJ9t\n+GB3bq6nvcjEtQ4d7WsdvJqBxjC8iHUqfBFr1eQTn7XiX/yM1b7p3zZWZT/bMDtvx9rIAuulKYX752wq\n2N61qcCpEKT+arNwXk1zf1l7y4SZp5qCd4DECqr6y7Y0BBY9aAksYuowKqjtLih521tQwjAKRsEooAkA\nACOTSr8;\n\nDEFINE COMMENT 7\neJyrZWBgqObpXBUlGLzju/i7Q2lS7w7VyhzYry87cc9kOd5FD2XvzZOQXjArSpBlwlx+7UZGwYKS12Jf\nstOknmQ9lN1XCdTOEKv5JZtfS2bxGe0N+0B8Fs3bprGaXJbz1csdrNXaHOtULGys1fYYu6mvNQLJa7g4\nb1/r0LT7rHHT7hsmRbvem7FuPmxlPPmmzfLObts/tbZ2+yrZHAOL1josSwOpzzQKLPpl/iRrmt2ytEX2\n7SkgMRNf5ymfwlgmhEXw1IdFKOc/D81IavL5kn3EK7FY1ruj/bZP4XQTX+ul9n4zVucEsW4WidqxFqTv\nW92byNe1v6OUqiuSN1cI57WVbO9qK0maplTduaq9Zsda/3pgWDRELa9pXt5Z2JRYXNjk6FfTXKd/qslc\nEqT/R9+2dIMpGUk/p13NPDizoVRqllXTthmNM35Oy1phMGXG6gMTZ6zeOqFy5eTexhkq3RVtp7v+1J7u\n6i+r7TYq6OhhzgWZYbREZnH94gWz1Bb3l5UsepKltlgqFiR+c7Fy/sJl29JvrraMf7pGK85zXUaS7KaC\nksbNxpMbN+ssAakRPnise8PxzNa7p//Ump05WyV/anrq7hNSsd7Hzob3HdkbVn5ob1jOwTeR6/dHJH7c\nW1DycW9FG8eBBbNyDv5d8PyI97KLp6yXMoyCUYAEAAXx3bs;\n\nDEFINE LABEL 16\neJyTYmBgsHObnjrdrXD6U9eFe4FcBhnrxGJBJ6OCMu/+ssTAhtKcoPnlTSHzy0FyoknHuo8n/altSVlX\nsSeTOXd5/tGMvYVfsvOLjAraSo5165ZYL2UouL5eNCt4B1dm8I6WlBmrRZMmzGQYBaNgFAxKAACTOipK\n;\n\nDEFINE LABEL 17\neJzjZGBgiMiQij2R9Xa+aNa7Q0Aug0XptvSWlMTif/EFJesjnAoZRsEoGAXDFgAA6FQNrw;\n\nDEFINE LABEL 18\neJwTZGBg0E5ZonAp+ZOqWeoVt+NJlSsVkhfuvZvCdg0oxaBYfLc6IkNkomNa4XQwP9t48pe8FWvyi4p2\nTSx9d2hOWfQphlEwCkbBkAUAQKQbsQ;\n\nDEFINE LABEL 19\neJyTY2BgaI4J3uEQdmD/H//knbd9vm3U9Mla0eTT0b4+oL9MM8So4FiUUcGdmIKSpfE89UDlDCeyrma2\n5pyb65S3Yk1kwbeN1dWVK9trZBZb1hZOf1CT2fq6NrH4de22dJDale1ZK9I6hfNA7AOdf2rPTAosejvV\nqIBhgMDxk59Xzruxc+1A2T8KRsFgAwBIsjvr;\n\nDEFINE LABEL 20\neJyzZGBgCLaoXGlr17Q73vH8gVsuB/b/cVfZyu55fB27p/XSP+4LZk13c54iY32se41FR3uwRWTLdst9\nlQ02yvnxjk+yjF2F8566OhUCjWGYGcac6xBWUCIS9WyDSFTT7rAI2WMg8aaQaU4g2qJ0w74TRQf2m+cu\n3Hs35fyB40kH9s9OO77uXs6MDu7Cs1ViRQUlDAVGBXsyhfOOJxkVgPRY1u6fo9y8fjZvZ9K0A50iE9M6\nK9pA4gc6pRu2dPypdW1zKpRoMir4VldQ8rq2v+xBzduak1Xn5r6uXbi3pln2mGTXu0MMo2AUjAKcAABZ\nt2OA;\n\nDEFINE LABEL 21\neJwTZ2Bg4EzcsC88IXjH0vj9czYkrKsITwgs+hx3NXNWHHdMf+ydiIrovWG7I6ViOSLbU/6GL0tjAOtR\nzk9KnJ5amWwZ/yL1d9S9nL1hfvmW8SmFzLkniq71nCg6f4BhFIyCUTDoAQCVlygZ;\n\nDEFINE LABEL 22\neJwTYmBg4C5cV5FfdDXzSvH01OXllvH7Kj0TxKsqksWrKldurgje4Vd+4xJQGcPy8iUKmyumym+uUNSc\nU2ag1VaiqNlWclhpTtkSBYZRMApGwZAEAJbYHQw;\n\nDEFINE LABEL 23\neJwTZWBgmFTL5PW69ttGy9obl05WXXi8vPz/s6rijQ+rsqNPJWce2B+RUbnyRNaEmfdygqZ+yTvWDdTC\n8KDGXPJ1rYbE69pWuQc1SxSUqsOlq6s1JNprOMUYRsEoGAVDBgAAgQYntA;\n\nDEFINE LABEL 24\neJwTZ2BgyMtaMOtL2tuaF6nMuS9SK5K/pCUEKGavNfLLd9D2K/+kqlT9SdWlTlFzf+Nao/aWzx6TWyMS\nH7RINyg3O0+JapBZ3F5zfN3mCtbN+UUm2yILVLb65X/bWJV9bx7DKBgFo2DQAwBvpCnj;\n"
});