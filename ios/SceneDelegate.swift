//  (iOS 13 이상) UI 관련 라이프사이클 분리하여 관리

import KakaoSDKAuth
import UIKit //Foundation 포함

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    // 카카오톡 로그인 리디렉션 URL 처리(iOS 13 이상 - 개별 Scene의 URL 리디렉션)
    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        if let url = URLContexts.first?.url {
            if AuthApi.isKakaoTalkLoginUrl(url) {
                _ = AuthController.handleOpenUrl(url: url)
            }
        }
    }

    // 기타 UI 관련 처리
}