// //
// //  ViewController.swift
// //  MayoApp
// //
// //  Created by 김정현 on 2/19/25.
// //
// //import Foundation

// import UIKit
// import KakaoSDKAuth
// import KakaoSDKUser

// class ViewController: UIViewController {
    
//     override func viewDidLoad() {
//         super.viewDidLoad()
//     }

//     // 카카오톡 앱으로 로그인
//     func kakaoLonginWithApp() {
//         UserApi.shared.loginWithKakaoTalk { (oauthToken, error) in
//             if let error = error {
//                 print(error)
//             } else {
//                 print("loginWithKakaoTalk() success.")
//                 _ = oauthToken
//             }
//         }
//     }

//     // 카카오 계정으로 로그인
//     func kakaoLoginWithAccount() {
//         UserApi.shared.loginWithKakaoAccount { (oauthToken, error) in
//             if let error = error {
//                 print(error)
//             } else {
//                 print("loginWithKakaoAccount() success.")
//                 _ = oauthToken
//             }
//         }
//     }

//     // 로그인
//     func KakaoLogin() {
//         // 카카오톡 실행 가능 여부 확인
//         if UserApi.isKakaoTalkLoginAvailable() {
//             // 카카오톡 앱으로 로그인 인증
//             kakaoLonginWithApp()
//         } else { 
//             // 카카오 계정으로 로그인
//             kakaoLoginWithAccount()
//         }
//     }
    
//     // 로그아웃
//     func kakaoLogout() {
//         UserApi.shared.logout { (error) in
//             if let error = error {
//                 print(error)
//             } else {
//                 print("logout() success.")
//             }
//         }
//     }

//     // 연결 끊기
//     func kakaoUnlink() {
//         UserApi.shared.unlink { (error) in
//             if let error = error {
//                 print(error)
//             } else {
//                 print("unlink() success.")
//             }
//         }
//     }

//     // 사용자 정보 가져오기
//     func getUserInfo() {
//         UserApi.shared.me { (user, error) in
//             if let error = error {
//                 print(error)
//             } else {
//                 print("me() success.")
//                 let userName = user?.kakaoAccount?.name
//                 let userEmail = user?.kakaoAccount?.email
//                 let userProfile = user?.kakaoAccount?.profile?.profileImageUrl
//                 print("이름: \(userName)")
//                 print("이메일: \(userEmail)")
//                 print("프로필: \(userProfile)")
//             }
//         }
//     }
// }
