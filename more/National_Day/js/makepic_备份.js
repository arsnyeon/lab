        const ul = document.querySelector('.cover-imgbox')
        const img = document.querySelectorAll('.cover-imgbox .img')
        const button = document.querySelector('.up-btn')
        const canvas = document.querySelector('#canvas')
        const ctx = canvas.getContext('2d')
        const generateImg = document.querySelector('.generateImg')
        const fileUpload = document.querySelector('input')
        let upLoadImg
        let avatarIcon
        let cropper = null;
        // 画canvas
        function drawImage(img) {
            ctx.drawImage(img, 0, 0, 800, 800)
        }
        // 清空canvas
        function resetCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'rgba(255, 255, 255, 0)'
        }
        function canvasToImg() {
            generateImg.src = canvas.toDataURL("image/png")
        }
        // 点击icon
        ul.addEventListener('click', function (event) {
            if (event.target.nodeName.toLowerCase() === 'img') {
                resetCanvas()
                upLoadImg && drawImage(upLoadImg)
                drawImage(event.target)
                canvasToImg()
                avatarIcon = event.target
            }
        })
        // 上传图片
        button.addEventListener('click', function () {
            fileUpload.click()
        })
        window.onload = function () {
            img[0].click()
            // 监听文件变化
            fileUpload.addEventListener('change', function () {
                var replaceSrc = URL.createObjectURL(this.files[0]);
                document.querySelector('#cropperImg').src = replaceSrc;
                var image = document.querySelector('#cropperImg');
                $('.cut-img-model').show();
                if (!cropper) {
                    cropper = new Cropper(image, {
                        dragMode: 'move',
                        aspectRatio: 1,
                        autoCropArea: 0.9,
                    });
                } else {
                    cropper.replace(replaceSrc, false);
                }
            })
            $('.js-save').click(function () {
                $(".cut-img-model").toggle();
                var src = cropper.getCroppedCanvas().toDataURL('image/jpeg', 0.7);
                const img = new Image()
                img.src = src;
                img.onload = function () {
                    drawImage(img)
                    drawImage(avatarIcon)
                    canvasToImg()
                    upLoadImg = img
                }
            })
        }